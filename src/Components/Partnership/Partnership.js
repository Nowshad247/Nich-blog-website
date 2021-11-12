import React from 'react';
import Slider from "react-slick";
import Image from 'react-bootstrap/Image'
import { Col } from 'react-bootstrap';
const Partnership = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 6000,
        cssEase: "linear"
    };
    return (
        <div className='container'>
            <div className="row mt-4">
                <div className="col-md-12 col-sm-12 text-center">
                    <h1 className='trending-products-title'> Partnership</h1>
                    <hr />
                </div>
            </div>


            <div className="row text-center">
                <div className='slider'>
                    <Slider {...settings}>
                        <div>
                            <Col xs={6} md={4} >
                                <Image src="https://cdn.shopify.com/s/files/1/0083/7474/7221/files/brand-logo-01.png?v=1558440978" />
                            </Col>
                        </div>
                        <div>
                            <Col xs={6} md={4} >
                                <Image src="https://cdn.shopify.com/s/files/1/0083/7474/7221/files/brand-logo-01.png?v=1558440978" />
                            </Col>
                        </div>
                        <div>
                            <Col xs={6} md={4} >
                                <Image src="https://cdn.shopify.com/s/files/1/0083/7474/7221/files/brand-logo-01.png?v=1558440978" />
                            </Col>
                        </div>
                        <div>
                            <Col xs={6} md={4} >
                                <Image src="https://cdn.shopify.com/s/files/1/0083/7474/7221/files/brand-logo-01.png?v=1558440978" />
                            </Col>
                        </div>
                        <div>
                            <Col xs={6} md={4} >
                                <Image src="https://cdn.shopify.com/s/files/1/0083/7474/7221/files/brand-logo-01.png?v=1558440978" />
                            </Col>
                        </div>



                    </Slider>
                </div>
            </div>
        </div>

    );
};

export default Partnership;