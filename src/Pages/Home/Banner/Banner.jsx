import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Banner1 from '../../../Images/BannerImages/Banner1.jpg';
import Banner2 from '../../../Images/BannerImages/Banner2.jpg';
import Banner3 from '../../../Images/BannerImages/Banner3.jpg';
import Banner4 from '../../../Images/BannerImages/Banner4.jpg';
import Banner5 from '../../../Images/BannerImages/Banner5.jpg';
import Banner6 from '../../../Images/BannerImages/Banner6.jpg';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={Banner1} />
            </div>
            <div>
                <img src={Banner2} />
            </div>
            <div>
                <img src={Banner3} />
            </div>
            <div>
                <img src={Banner4} />
            </div>
            <div>
                <img src={Banner5} />
            </div>
            <div>
                <img src={Banner6} />
            </div>
        </Carousel>
    );
};

export default Banner;