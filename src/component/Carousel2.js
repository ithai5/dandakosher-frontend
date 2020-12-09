
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel2() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            centerMode: true,
            adaptiveHeight: true,
            autoplay: true,
            pauseOnFocus: false,
            pauseOnHover: true,
        };


            return (

                <Slider {...settings}>
                    <div>
                        <img src="https://i.ibb.co/HYyNfV1/ktzizot.png" border="0" alt="Image1"/>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/N30m4BN/0e518b50-db7f-4f59-8315-64f333383e54.jpg" alt="Image2" border="0"/>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/pLpYPsT/2c6ec97f-854a-4fca-a657-60cf2ed914fb.jpg" alt="Image3" border="0"/>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/tcMHVG8/4c649e2b-88e6-4b1b-a8ee-be6b34047800.jpg" alt="Image4" border="0"/>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/NmnpVBk/26d5a02c-fa2f-4e54-8dea-e19da8528d73.jpg" alt="Image5" border="0"/>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/6XZqwJT/49aa6fc6-2438-4abc-b32f-6cf893f5eec0.jpg" alt="Image6" border="0"/>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/8zhDHSB/65b886e9-c43c-4db0-809a-4f35952bace7.jpg" alt="Image7" border="0"/>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/YbLn2bW/401ee01e-f837-4bc4-ba1d-8e00285d8ac0.jpg" alt="Image8" border="0"/>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/CtQtggw/Untitled.png" alt="Image9" border="0"/>
                    </div>
                </Slider>

            );
}
