import React from "react";
import NavBar from "./NavBar";
import "../css files/user_login.css";
import { useState } from "react";
const User_Login = () => {

    const [isSigndUp,setIsSignedUp] = useState(false)

    const [email,setEmail] = useState('');
    const [pass, setPass] = useState();

    return(
        <>
            <div className="user-login-navbar">
                <NavBar isSigndUp={isSigndUp} setIsSignedUp={setIsSignedUp}/>
            </div>
            <div className="user-outer-div">
                <h2 className="user-login-title">User Login</h2>
                <label htmlFor="user-email">Email:</label>
                <input type="text" id="user-email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                <label htmlFor="user-pass">Password:</label>
                <input type="password" id="user-pass" value={pass} onChange={(e) => {setPass(e.target.value)}}/>
                <button className="user-login-btn" onClick={() => {setIsSignedUp(true)}}>Submit</button>
            </div>
        </>
    )

}

export default User_Login