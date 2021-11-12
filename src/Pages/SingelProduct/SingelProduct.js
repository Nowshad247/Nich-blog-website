import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const SingelProduct = (props) => {
    const { id } = useParams();
    const { user } = useAuth();
    const [product, setProduct] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch(`https://safe-shore-20659.herokuapp.com/singel-product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handelOnBlure = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...order };
        newLoginData[field] = value;

        setOrder(newLoginData);

    }
    const history = useHistory();
    const handelSubmit = (e) => {
        e.preventDefault();
        axios.post('https://safe-shore-20659.herokuapp.com/place-order', {
            productid: product._id,
            userid: user.uid,
            name: order.name,
            email: order.email,
            phone: order.phone,
            orderStatus: 'Painding',
        })
            .then(function (response) {
                if (response.status == 200) {
                    const insertedId = response.data.insertedId;
                    history.push(`/payment/${insertedId}`)
                };
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div className='container mt-4 mb-4'>
            <div className='row'>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={product.image} alt="" className='img-fluid' />
                        </div>
                        <div className="col-md-6">
                            <h3>{product.name}</h3>
                            <h4>Size :  {product.size}</h4>
                            <h5> Price : {product.Price} USD</h5>
                            <p>{product.details}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <h1>Order Place</h1>
                    <Form onSubmit={handelSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" name="name" onBlur={handelOnBlure} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" onBlur={handelOnBlure} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="tel" placeholder="Phone Number" name="phone" onBlur={handelOnBlure} />
                            <Form.Text className="text-muted">
                                We'll never share your phone number with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="outline-warning" type="submit">
                            Order Place
                        </Button>
                    </Form>
                </div>
            </div>

        </div>
    );
};

export default SingelProduct;