import React from 'react';
import './LoginPage.css';
import logo from '../../Images/Logo.png';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import { useState } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router';
import { useEffect } from 'react';
import LoginFrom from './LoginFrom';
import RegForm from './RegForm';
const LoginPage = () => {
    const { signinUsinggoogle, signinUsinggit, error, user, saveUser } = useFirebase();
    const [isLogin, setIsLogin] = useState(false);

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/login';
    const handelGooglelogin = () => {
        signinUsinggoogle().then(result => {
            history.push(redirect_uri.pathname);
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT');

        })
    }
    const handelGitlogin = () => {
        signinUsinggit().then(result => {
            history.push(redirect_uri.pathname);
        })
    }
    useEffect(() => {
        if (user.email) {
            history.push('/');
        }
    }, user.email)

    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="account-contenet">
                            <div className="row align-items-center justify-content-center">
                                <div className="col-md-7 col-lg-6 login-left">
                                    <RegForm></RegForm>
                                </div>
                                <div className='col-md-12 col-lg-6 login-right'>

                                    <LoginFrom></LoginFrom>
                                    <hr />
                                    <Button variant="danger" onClick={handelGooglelogin}>Login With Google</Button>
                                    <Button variant="danger" onClick={handelGitlogin}>Login With Github</Button>
                                    <hr />
                                    {error}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;