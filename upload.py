import boto3
from botocore.client import Config
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    
    s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))
    
    dist_bucket = s3.Bucket('portfolio.clarkdeveloper.com')
    src_bucket = s3.Bucket('portfoliobuild.clarkdeveloper.com')
    
    build_zip = StringIO.StringIO()
    src_bucket.download_fileobj('portfolioBuild.zip', build_zip)
    
    with zipfile.ZipFile(build_zip) as tmpZip:
        for name in tmpZip.namelist():
            obj = tmpZip.open(name)
            dist_bucket.upload_fileobj(obj, name, ExtraArgs={'ContentType': mimetypes.guess_type(name)[0]})
            dist_bucket.Object(name).Acl().put(ACL='public-read')
    print 'Job Done!'
    return 'Build Complete'