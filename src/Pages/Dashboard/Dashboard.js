import React from 'react';

import { Button, Col, Nav, Row, Tab } from 'react-bootstrap';
import AddProducts from '../../Components/AddProducts/AddProducts';
import AllOrders from '../../Components/AllOrders/AllOrders';
import AllProducts from '../../Components/AllProducts/AllProducts';
import useAuth from '../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Orders from '../Orders/Orders';
import Payment from '../Payment/Payment';
import Reviews from '../Reviews/Reviews';
import './Dashboard.css';
const Dashboard = () => {
    const { user, logout, admin } = useAuth();
    return (
        <div className="container">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            {
                                admin ? <div>
                                    <Nav.Item>
                                        <Nav.Link eventKey="firs">
                                            Dashboard
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="six">
                                            Manage all Order
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="seven">
                                            Manage Product
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="eight">
                                            Add products
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="nine">
                                            Make Admin
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Link eventKey="five" className='bg-black'>
                                        <p onClick={logout}>Log Out </p>
                                    </Nav.Link>
                                </div> : <div>
                                    <Nav.Item>
                                        <Nav.Link eventKey="firstone">
                                            My Order
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">
                                            Pay Now
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="three">
                                            Reviews
                                        </Nav.Link>
                                        <Nav.Link eventKey="four">
                                            Profile
                                        </Nav.Link>
                                        <Nav.Link eventKey="five" className='bg-black'>
                                            <p onClick={logout}>Log Out </p>
                                        </Nav.Link>
                                    </Nav.Item>

                                </div>
                            }

                            <hr />


                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <h1>Welcome to Dashboard</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="firstone">
                                <Orders></Orders>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Payment></Payment>
                            </Tab.Pane>
                            <Tab.Pane eventKey="three">
                                <Reviews></Reviews>
                            </Tab.Pane>
                            <Tab.Pane eventKey="four">
                                <h1>Profile will add soon</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="five">
                                <h1>Profile will add soon</h1>
                            </Tab.Pane>
                            <Tab.Pane eventKey="six">
                                <h1>All orders</h1>
                                <AllOrders></AllOrders>
                            </Tab.Pane>
                            <Tab.Pane eventKey="seven">
                                <AllProducts></AllProducts>
                            </Tab.Pane>
                            <Tab.Pane eventKey="eight">
                                <AddProducts></AddProducts>
                            </Tab.Pane>
                            <Tab.Pane eventKey="nine">
                                <MakeAdmin></MakeAdmin>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>

            </Tab.Container>



        </div>
    );
};

export default Dashboard;