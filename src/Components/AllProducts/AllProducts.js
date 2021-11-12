import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Table from 'react-bootstrap/Table'
const AllProducts = () => {
    const { user } = useAuth();
    const [products, setproducts] = useState([]);
    const [newdata, setnewdata] = useState([]);
    const handelCheng = () => {

    }
    useEffect(() => {
        fetch('https://safe-shore-20659.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])

    const handelDeleteClick = (id) => {
        fetch(`https://safe-shore-20659.herokuapp.com/products-delete/${id}`, {
            method: 'DELETE',
            headers: { "content-type": "application/json" }
        }).then(res => res.json())
            .then(data => {
                const remaining = products.filter(order => order._id !== id);
                setproducts(remaining);
                alert('Do You Want to Order');
            })
    }
    return (

        <div className='container'>
            <div className='row'>
                <Table striped bordered hover size="sm">

                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Size</th>

                            <th>ratings
                            </th>
                            <th>Price</th>
                            <th>DeLete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <tr>
                                <td>{product.name}</td>
                                <td>{product.size}</td>
                                <td>{product.ratings}</td>
                                <td>{product.Price}</td>
                                <td><button onClick={() => handelDeleteClick(product._id)}> Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </Table>
            </div>
        </div >
    );
};

export default AllProducts;