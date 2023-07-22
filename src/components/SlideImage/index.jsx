import React from "react";
import image1 from "../SlideImage/assets/anh1.png"
import image2 from "../SlideImage/assets/anh2.png"
import { Carousel } from 'react-responsive-carousel';


export const SlideImage = () => {
    return (
        <Carousel>
            <div>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="anh1"
                />
            </div>
            <div>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="anh2"
                />
            </div>
        </Carousel>
    )
}