import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';
const myWork = [
    {
        'title': "Inspection App",
        'href': "https://example.com",
        'desc': "Odd Future 90's aesthetic you probably haven't heard of them Portland Brooklyn Wes Anderson plaid drinking vinegar brunch squid lomo typewriter pop-up Tonx gastropub before they sold out vegan kogi salvia biodiesel deep v sriracha Etsy yr narwhal fap bicycle rights put a bird on it shabby chic street art Helvetica actually next level freegan High Life small batch readymade Thundercats McSweeney's church-key distillery gluten-free ennui swag fingerstache dreamcatcher cliche Marfa +1 Truffaut normcore paleo asymmetrical mustache kale chips raw denim YOLO Bushwick roof party literally wayfarers chillwave Echo Park keffiyeh mixtape meggings letterpress synth Kickstarter hoodie Tumblr slow-carb pour-over ethical try-hard cornhole umami hella chia butcher fanny pack organic Godard Blue Bottle Neutra messenger bag leggings four loko photo booth whatever fashion axe seitan Williamsburg occupy PBR banjo meh Banksy keytar bitters 8-bit tousled crucifix Intelligentsia irony mumblecore art party Vice sustainable farm-to-table forage direct trade  jean shorts cred craft beer semiotics wolf flannel vinyl heirloom Austin blog tofu chambray flexitarian XOXO DIY mlkshk beard Cosby sweater selvage disrupt PBR&B gentrify lo-fi twee master cleanse kitsch banh mi retro polaroid Carles American Apparel bespoke cardigan quinoa hashtag locavore food truck trust fund single-origin coffee Schlitz pickled VHS skateboard Pinterest ugh authentic tattooed sartorial iPhone fixie Pitchfork pug Shoreditch artisan viral scenester selfies tote bag stumptown post-ironic 3 wolf moon cray pork belly",
        'image': {
            'desc': "Login Screen",
            'src': "images/eigi.png",
            'comment': ""
        }
    },
    {
        'title': "Portfolio",
        'image': {
            'desc': "Portfolio",
            'src': "images/portfolio.png",
            'comment': ""
        }
    },
    {
        'title': "AWS CI\CD",
        'image': {
            'desc': "Pipleline for AWS CI\CD",
            'src': "images/aws.png",
            'comment': ""
        }
    }
]
ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));