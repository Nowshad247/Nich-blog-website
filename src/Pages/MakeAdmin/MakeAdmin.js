import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
const MakeAdmin = () => {
    const [email, setemail] = useState([])
    const handelemial = (e) => {
        setemail(e.target.value);
    }
    const handelSubmit = (e) => {
        e.preventDefault();
        const user = { email: email }
        fetch('https://safe-shore-20659.herokuapp.com/add-admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    alert("admin added")
                }
            })
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <Form onSubmit={handelSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" onChange={handelemial} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Make Admin
                        </Button>
                    </Form>
                </div>

            </div>

        </div>
    );
};

export default MakeAdmin;