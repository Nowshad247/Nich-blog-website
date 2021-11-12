import React from 'react';
import { Button } from 'react-bootstrap';
import './Featured.css'
const Featured = () => {
    return (
        <div className='container '>
            <div className="row m-5">
                <div className="col-md-6 col-xs-6 col-sm-12 featured-animation">
                    <div className='featured-img'>
                        <div className='featured-img'>

                            <img src="https://cdn.shopify.com/s/files/1/0083/7474/7221/files/banner-01_ba5e2fae-2dfa-4ee0-a1ed-171a232798b4.jpg?v=1558503080" alt="" className='img-fluid' />

                        </div>
                        <div className='featured-contect'>

                            <p>Now 35% off this one</p>
                            <a href="" className='btn btn-warning p-2'>Shop Now</a>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 col-xs-6 col-sm-12 featured-animation">
                    <div className='featured-img'>
                        <div className='featured-img'>

                            <img src="https://cdn.shopify.com/s/files/1/0083/7474/7221/files/banner-01_ba5e2fae-2dfa-4ee0-a1ed-171a232798b4.jpg?v=1558503080" alt="" className='img-fluid' />

                        </div>
                        <div className='featured-contect'>

                            <p>Now 35% off this one</p>
                            <a href="" className='btn btn-warning p-2'>Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Featured;