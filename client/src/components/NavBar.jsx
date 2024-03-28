import React from "react";
import "../css files/navbar.css"
import { useState } from "react";
const NavBar = () => {

    const [isSigndUp,setIsSignedUp] = useState(false)

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
                        <li onClick={() => {setIsSignedUp(true)}}>LogIn</li>
                        <li>SignUp</li>
                    </ul>
                </div>
            }
        </>
    )
}

export default NavBar