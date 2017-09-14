import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';

const myExample = {
        'title': "Inspection App",
        'href': "https://example.com",
        'desc': "Odd Future 90's aesthetic you probably haven't heard of them Portland Brooklyn Wes Anderson plaid drinking vinegar brunch squid lomo typewriter pop-up Tonx gastropub before they sold out vegan kogi salvia biodiesel deep v sriracha Etsy yr narwhal fap bicycle rights put a bird on it shabby chic street art Helvetica actually next level freegan High Life small batch readymade Thundercats McSweeney's church-key distillery gluten-free ennui swag fingerstache dreamcatcher cliche Marfa +1 Truffaut normcore paleo asymmetrical mustache kale chips raw denim YOLO Bushwick roof party literally wayfarers chillwave Echo Park keffiyeh mixtape meggings letterpress synth Kickstarter hoodie Tumblr slow-carb pour-over ethical try-hard cornhole umami hella chia butcher fanny pack organic Godard Blue Bottle Neutra messenger bag leggings four loko photo booth whatever fashion axe seitan Williamsburg occupy PBR banjo meh Banksy keytar bitters 8-bit tousled crucifix Intelligentsia irony mumblecore art party Vice sustainable farm-to-table forage direct trade  jean shorts cred craft beer semiotics wolf flannel vinyl heirloom Austin blog tofu chambray flexitarian XOXO DIY mlkshk beard Cosby sweater selvage disrupt PBR&B gentrify lo-fi twee master cleanse kitsch banh mi retro polaroid Carles American Apparel bespoke cardigan quinoa hashtag locavore food truck trust fund single-origin coffee Schlitz pickled VHS skateboard Pinterest ugh authentic tattooed sartorial iPhone fixie Pitchfork pug Shoreditch artisan viral scenester selfies tote bag stumptown post-ironic 3 wolf moon cray pork belly",
        'image': {
            'desc': "Login Screen",
            'src': "images/eigi.png",
            'comment': ""
        }
    };


describe("ExampleWorkModal component", () => {
    let mockCloseModalFn = jest.fn();
    let component = shallow(<ExampleWorkModal example={myExample} open={false} closeModal={mockCloseModalFn}/>);
    let openComponent = shallow(<ExampleWorkModal example={myExample} open={true}/>);
    
    let anchors = component.find("a");

    it("Should contain a single 'a' element", () =>{
        expect(anchors.length).toEqual(1);
    });

    it("Should link to our project", () => {
        expect(anchors.node.props.href).toEqual(myExample.href);
    })

    it("Should have the modal class set correctly", () => {
        expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
        expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
    });

    it("Should call mock close modal when x is clicked", () => {
        component.find(".modal__closeButton").simulate('click');
        expect(mockCloseModalFn).toHaveBeenCalled();
    });
});