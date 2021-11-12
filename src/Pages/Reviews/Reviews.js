import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../hooks/useAuth';

const Reviews = () => {
    const [rate, setrate] = useState(2.5);
    const [reviews, setReviews] = useState([]);

    const { user } = useAuth();
    const handelinput = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...reviews };
        newLoginData[field] = value;
        setReviews(newLoginData);
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        axios.post('https://safe-shore-20659.herokuapp.com/add-reviews', {
            name: user.displayName,
            review: reviews.review,
            rate: rate,
            image: user.photoURL,
        })
            .then(function (response) {
                if (response.status == 200) {
                    const insertedId = response.data.insertedId;
                    alert("reviews Added")
                };
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className='container'>
            <div className="row">
                <h1>This is Reviews</h1>
                <div className='col-md-12'>
                    <Form onSubmit={handelSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" onBlur={handelinput} readOnly name='name' value={user.displayName} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your text</Form.Label>
                            <Form.Control as="textarea" rows={3} onBlur={handelinput} name='review' />
                        </Form.Group>
                        <Rating
                            initialRating={rate}

                            onChange={(rate) => setrate(rate)}
                        />
                        <h1>{rate}</h1>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>

        </div>
    );
};

export default Reviews;