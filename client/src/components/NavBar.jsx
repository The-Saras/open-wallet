import React from "react";
import "../css files/navbar.css"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
const NavBar = ({isSigndUp, setIsSignedUp}) => {

    const navigate = useNavigate()

    return(
        <>
            {isSigndUp? 
                <div className="navbar">
                    <h2 className="navbar-title">UPI CLONE</h2>
                    <ul>
                        <li onClick={() => {setIsSignedUp(false)}}>LogOut</li>
                    </ul>
                </div>
                : 
                <div className="navbar">
                    <h2 className="navbar-title">UPI CLONE</h2>
                    <ul>
                        <li onClick={() => {navigate('/')}}>Home</li>
                        <li onClick={() => {navigate('#')}}>Send Money</li>
                        <li onClick={() => {navigate('#')}}>Account Details</li>
                    </ul>
                    <ul>
                        <span></span>
                        <li onClick={() => {navigate('/user_login')}}>LogIn</li>
                        <span></span>
                        <li onClick={() => {navigate('/user_signup')}}>SignUp</li>
                    </ul>
                </div>
            }
        </>
    )
}

NavBar.prototype = {
    isSigndUp: PropTypes.bool,
    setIsSignedUp: PropTypes.func,

}
export default NavBar