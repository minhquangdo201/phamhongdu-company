import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import chungchi1 from '../assets/chungchi1.png'
import chungchi2 from '../assets/chungchi2.png'

export const CertificateSlide = () => {
    return (
        <Carousel>
            <Carousel.Item className='slide'>
                <img
                    className="d-block w-100"
                    src={chungchi1}
                    alt="chungchi1"
                />
            </Carousel.Item>
            <Carousel.Item className='slide'>
                <img
                    className="d-block w-100"
                    src={chungchi2}
                    alt="chungchi2"
                />
            </Carousel.Item>
        </Carousel>
        
    )
}