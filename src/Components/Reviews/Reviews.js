import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Image from 'react-bootstrap/Image'
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://safe-shore-20659.herokuapp.com/all-reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-12 col-sm-12 text-center">
                    <h1 className='trending-products-title'> REVIEWS</h1>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className='slider'>

                    <Slider {...settings}>
                        {
                            reviews.map(review => <div>
                                <Col xs={6} md={4}>
                                    <Image src={review?.image} roundedCircle />
                                </Col>
                                <h4>{review.name}</h4>
                                <Rating
                                    initialRating={review.rate}
                                    readonly
                                />

                                <p>{review.review}</p>
                            </div>)
                        }



                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Reviews;