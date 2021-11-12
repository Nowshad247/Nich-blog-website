import React from 'react';
import { FormControl } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'

import { BsGrid } from "react-icons/bs";

const Subscribe = () => {
    return (
        <div className='bg-dark text-light'>
            <div className='container'>
                <div className='row mt-4 '>
                    <div className='col-md-6 pt-5'>
                        <h3 className='trending-products-title'><BsGrid />  GET LATEST NEWS UPDATES</h3>
                    </div>
                    <div className='col-md-6 p-5'>
                        <div>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Your Email"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Text id="basic-addon2" className='btn btn-warning'>Your Email</InputGroup.Text>
                            </InputGroup>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Subscribe;