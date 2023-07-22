import React from "react";
import image1 from "../SlideImage/assets/anh1.png"
import image2 from "../SlideImage/assets/anh2.png"
import Carousel from 'react-bootstrap/Carousel';


export const SlideImage = () => {
    return (
        <Carousel>
            <Carousel.Item className='slide'>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="anh1"
                />
            </Carousel.Item>
            <Carousel.Item className='slide'>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="anh2"
                />
            </Carousel.Item>
        </Carousel>
    )
}