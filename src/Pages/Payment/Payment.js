import React from 'react';
import { useParams } from 'react-router';

const Payment = (props) => {
    const { insertedId } = useParams();
    return (
        <div className='container'>
            <h1>The Payment is process coming soon </h1>
            {
                insertedId ? <h2 className="m-5">Your Order id : {insertedId} </h2> : ''
            }

            <h2>Thank You </h2>
        </div>
    );
};

export default Payment;