import React, {Component} from 'react';

class ImageCarousel extends Component {
    const  imgs= document.getElementById('imgs');
    const leftBtn= document.getElementById('left');
    const  rightBtn= document.getElementById('right');
    const  img= document.querySelectorAll('#imgs img');

    let  index= 0;

    let  interval= setInterval(run, 2000);


    function run() {
        index++
        changeImage()
    }

    function changeImage() {
        if(index > img.length -1) {
            index = 0;
        } else if(index < 0) {
            index = img.length -1
        }
        imgs.style.transform = `translateX(${-index * 500}px}`
    }

    resetInterval(){
        clearInterval(interval)
        interval = setInterval(run, 2000)
    }

    rightBtn.addEventListener('click', () => {
    index++
    changeImage()
    resetInterval
    })

leftBtn.addEventListener('click', () => {
    index--
    changeImage()
    resetInterval
    render(){


        return(

            <div className="carousel">
                <div className="image-container" id="imgs">
                    <img src="https://ibb.co/2Pr81ym" alt="image1"/>
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
            </div>
        )
    }
}

export default ImageCarousel;