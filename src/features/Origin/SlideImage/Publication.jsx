import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import congbo1 from '../assets/congbo1.png'
import congbo2 from '../assets/congbo2.png'
import congbo3 from '../assets/congbo3.png'


export const PublicationSlide = () => {
    return (
        <Carousel>
            <Carousel.Item className='slide'>
                <img
                    className="d-block w-100"
                    src={congbo1}
                    alt="congbo1"
                />
            </Carousel.Item>
            <Carousel.Item className='slide'>
                <img
                    className="d-block w-100"
                    src={congbo2}
                    alt="congbo2"
                />
            </Carousel.Item>
            <Carousel.Item className='slide'>
                <img
                    className="d-block w-100"
                    src={congbo3}
                    alt="congbo3"
                />
            </Carousel.Item>
        </Carousel>
    )
}