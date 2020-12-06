import React, {Component} from 'react';

class ImageCarousel extends Component {

    render() {
        return(

            <div className="carousel">
                <div className="image-container" id="imgs">
                    <img src="/Volumes/Macintosh HD/Users/Ignacio/Desktop/perc.png" alt="image1"/>
                    <img src="https://ibb.co/mB4BkkR" alt="image2"/>
                    <img src="https://ibb.co/hCmQsCM" alt="image3"/>
                    <img src="https://ibb.co/z7HbnvL" alt="image4"/>
                    <img src="https://ibb.co/KN1jJ3G" alt="image5"/>
                    <img src="https://ibb.co/LNPsRhc" alt="image6"/>
                    <img src="https://ibb.co/TRBw9fm" alt="image7"/>
                    <img src="https://ibb.co/9rjQvf0" alt="image8"/>
                    <img src="https://ibb.co/QcWC5wH" alt="image9"/>
                </div>
                <div className="buttons-container">
                    <button className='btn' id="left">Prev</button>
                    <button className='btn' id="right">Next</button>
                </div>
                <script src="/src/carouselinJS.js"></script>
            </div>
        )
    }
}

export default ImageCarousel;