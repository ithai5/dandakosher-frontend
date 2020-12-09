import React, {Component} from 'react';
import Box from "./Box";
import Carousel2 from "./Carousel2";
class Home extends Component {
    render() {
        return (
            <>
            <div className='flex-container'>
                    <Box
                        className = {'box'}
                        displayName = {'Events'}
                        icon={'fas fa-utensils fa-3x'}
                        text = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt esse.\n' +
                        'Ut enim ad minim veniam'}/>

                    <Box
                        className = {'box'}
                        displayName = {'Take Away'}
                        icon={'fas fa-shipping-fast fa-3x'}
                        text = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt esse.\n' +
                        'Ut enim ad minim veniam'}/>

                    <Box
                        className = {'box'}
                        displayName = {'Write us'}
                        icon = {'fas fa-pen fa-3x'}
                        text = {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ea corrupti nesciunt esse.\n' +
                        ' Ut enim ad minim veniam'}/>


            </div>
                <div className='carousel'>
                    <Carousel2/>
                </div>
            </>

        );
    }
}

export default Home;