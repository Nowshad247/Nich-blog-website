import React, { useEffect, useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Product from '../../Components/Product/Product';
const axios = require('axios');
const AllProducts = () => {
    const [products, setporducts] = useState([])
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
    }, [])
    return (
        <div className='container'>
            <div className='row'>

                <CardGroup>
                    {
                        products.map(product => <Product data={product}></Product>)
                    }
                </CardGroup>
            </div>
        </div>
    );
};

export default AllProducts;