import React from 'react';
import logo from '../../Images/Logo.png';
import Card from 'react-bootstrap/Card'
import { ListGroup } from 'react-bootstrap';
import { BsFillGeoAltFill, BsFillChatRightFill, BsFillTelephoneFill } from "react-icons/bs";
const Footer = () => {
    return (
        <div className='bg-dark text-light'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 text-center'>
                        <h4 style={{ width: '18rem', fontSize: '15px' }}>OUR COMPANY</h4>
                        <img src={logo} alt="" className='img-fluid logo border m-2 p-4' />
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus, duis faucibus enim vitae.

                        </p>
                    </div>
                    <div className='col-md-3'>
                        <h4 style={{ width: '18rem', fontSize: '15px' }}>OUR COMPANY</h4>
                        <p><a href="#" class="text-light ">Secondary link</a></p>
                        <p><a href="#" class="text-light ">Secondary link</a></p>
                        <p><a href="#" class="text-light ">Secondary link</a></p>

                    </div>
                    <div className='col-md-3 text-center'>
                        <h4 style={{ width: '18rem', fontSize: '15px' }}>OPRODUCTS</h4>
                        <p className='text-light '>Product</p>
                        <p className='text-light '>Product</p>
                        <p className='text-light '>Product</p>
                        <p className='text-light '>Product</p>
                        <p className='text-light '>Product</p>

                    </div>
                    <div className='col-md-3 text-center'>
                        <h4 style={{ width: '18rem', fontSize: '15px' }}>STORE INFORMATION</h4>

                        <p className='text-light '>
                            <BsFillGeoAltFill />  My Company, 42 Puffin Street 12345 Puffinville France
                        </p>
                        <p className='text-light '>
                            <BsFillChatRightFill /> Email: Nowshad @gmail.com
                        </p>
                        <p className='text-light '>
                            <BsFillTelephoneFill /> Phone: +88017222131610
                        </p>

                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <p className='text-secondary text-center'>Nowshad @ admin.com</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;