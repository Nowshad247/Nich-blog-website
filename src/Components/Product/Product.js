import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const { name, Price, details, image, _id, ratings } = props.data;
    return (
        <div className='col-md-4'>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Body>
                        <Card.Link>{Price} USD</Card.Link>
                        <Card.Link >{ratings}</Card.Link>
                    </Card.Body>
                </Card.Footer>
                <Card.Footer>
                    <Link to={`/order/${_id}`}>
                        <p className='btn btn-warning p-2'>Shop Now</p>
                    </Link>
                </Card.Footer>
            </Card>
        </div>

    );
};

export default Product;