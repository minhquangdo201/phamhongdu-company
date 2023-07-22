import React from "react";
import { Carousel } from 'react-responsive-carousel';
import congbo1 from '../assets/congbo1.png'
import congbo2 from '../assets/congbo2.png'
import congbo3 from '../assets/congbo3.png'



export const PublicationSlide = () => {
    return (
        <Carousel>
            <div>
                <img
                    className="d-block w-100"
                    src={congbo1}
                    alt="congbo1"
                /></div>
            <div>
                <img
                    className="d-block w-100"
                    src={congbo2}
                    alt="congbo2"
                /></div>
            <div>
                <img
                    className="d-block w-100"
                    src={congbo3}
                    alt="congbo3"
                />
            </div>

        </Carousel>
    )
}