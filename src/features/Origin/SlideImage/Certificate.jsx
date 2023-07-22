import React from "react";
import { Carousel } from 'react-responsive-carousel';
import chungchi1 from '../assets/chungchi1.png'
import chungchi2 from '../assets/chungchi2.png'
import chungnhan from '../assets/chungnhan.png'

export const CertificateSlide = () => {
    return (
        <Carousel>
            <div>
                <img src={chungchi1} />
            </div>
            <div>
                <img src={chungchi2} />
            </div>
            <div>
                <img src={chungnhan}/>
            </div>
        </Carousel>

    )
}