import React from 'react';
import './products.css';
import CardGroup from 'react-bootstrap/CardGroup'
import { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
const axios = require('axios');
const Products = () => {
    const [products, setporducts] = useState([]);
    useEffect(() => {
        axios.get('https://safe-shore-20659.herokuapp.com/products')
            .then(function (response) {
                setporducts(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, []);
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 col-sm-12 text-center">
                    <h1 className='trending-products-title'> TRENDING PRODUCTS</h1>
                    <hr />
                </div>
            </div>
            <div className="row">
                <CardGroup>
                    {
                        products.slice(0, 6).map(product => <Product data={product}></Product>)
                    }
                </CardGroup>
            </div>
        </div>
    );
};

export default Products;