import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';
const myWork = [
    {
        'title': "Inspection App",
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