import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, {ExampleWorkBubble} from '../js/example-work';


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
    }
];
describe("ExampleWork Component", () => {
    let component = shallow(<ExampleWork work={myWork}/>);

    it("Should be a 'section' element", () => {
        expect(component.type()).toEqual('section');
    });
    it("Should contain as many children as there are work examples", () => {
        expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
    });
});

describe("exampleWorkBubble component", () => {
    let component = shallow(<ExampleWorkBubble example={myWork[1]}/>);
    let images = component.find("img");

    it("should contain a single 'img' element", () => {
        expect(images.length).toEqual(1);
    });

    it("Should have the image src set correctly", () => {
        expect(images.node.props.src).toEqual(myWork[1].image.src);
    });
});