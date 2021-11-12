import React from 'react';
import Card from 'react-bootstrap/Card';
const LatestArticles = () => {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-12 col-sm-12 text-center">
                    <h1 className='trending-products-title'> Latest articles</h1>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://cdn.shopify.com/s/files/1/1009/2710/articles/3_78994f8e-a61d-4c0e-bcac-ae4c2a90f4e7_768x.jpg?v=1451901536" alt="Card image" />
                        <Card.ImgOverlay className='text-dark '>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            <button type="button" class="btn btn-dark">See More</button>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <div className='col-md-4'>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://cdn.shopify.com/s/files/1/1009/2710/articles/5_1024x1024_8ce77031-a8ee-4f22-a420-5ec8c01a8f21_768x.jpg?v=1451901582" alt="Card image" />
                        <Card.ImgOverlay className='text-dark '>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            <button type="button" class="btn btn-dark">See More</button>
                        </Card.ImgOverlay>
                    </Card>
                </div>
                <div className='col-md-4'>
                    <Card className="bg-dark text-white">
                        <Card.Img src="https://cdn.shopify.com/s/files/1/1009/2710/articles/5_1024x1024_8ce77031-a8ee-4f22-a420-5ec8c01a8f21_768x.jpg?v=1451901582" alt="Card image" />
                        <Card.ImgOverlay className='text-dark '>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                            <button type="button" class="btn btn-dark">See More</button>
                        </Card.ImgOverlay>
                    </Card>
                </div>


            </div>
        </div>
    );
};

export default LatestArticles;