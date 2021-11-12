import React from 'react';
import { Button } from 'react-bootstrap';
import Slider from "react-slick";
import banner1 from '../../Images/banner 1.png';
import banner2 from '../../Images/banner 2.png';
import './Homebanner.css'
const HomeBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className='slider'>
                        <Slider {...settings}>
                            <div>
                                <img src={banner1} alt="" className='img-fluid' />
                            </div>
                            <div>
                                <img src={banner2} alt="" className='img-fluid' />
                            </div>
                            <div>
                                <img src={banner2} alt="" className='img-fluid' />
                            </div>

                        </Slider>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HomeBanner;