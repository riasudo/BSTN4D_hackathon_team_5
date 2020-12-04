import './SignInPage.scss';
import { Link } from 'react-router-dom';

import React from 'react';

function SignInPage(props) {
    return (
        <div className="sign-in-page">
            <div className="sign-in-card">
                {/* <img src="./assets/icons/walmart-main-logo-1.jpg" alt="walmart logo" className="logo"/> */}
                <div className="logo"></div>
                <h1 className="sign-in">Sign In</h1>
                <p className="email-phone">Email Address or Phone Number</p>
                <div type="text" className="email-phone-input">
                    
                </div>
                <p className="password">Password</p>
                <div className="password-input">
                    {/* <img src="./assets/icons/eye.png" alt="show password" className="email-phone-input_eye"/> */}
                    <div className="email-phone-input__eye"></div>
                    <p className="email-phone-input__text">Show</p>
                </div>
                <p className="forgot-password">Forgot your password?</p>
                <div className="sign-in-button">
                    <Link to='/profiles' className="sign-in-button__link">Sign in</Link>
                </div>
                <div className="account">
                    <p className="account__no">Don't have an account?</p>
                    <p className="account__create">Create account</p>
                </div>
                

                


            </div>            
        </div>
    )
};

export default SignInPage;
