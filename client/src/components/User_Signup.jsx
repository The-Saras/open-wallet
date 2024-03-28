import React from "react";
import NavBar from "./NavBar";
import "../css files/user_signup.css";
import { useState } from "react";
const User_Signup = () => {

    const [email,setEmail] = useState('');
    const [pass, setPass] = useState();
    const [conform_pass, setConformPass] = useState();
    return(
        <>
            <div className="user-signup-navbar">
                <NavBar />
            </div>
            <div className="user-signup-outer-div">
                
                <h2 className="user-signup-title">User Signup</h2>

                <label htmlFor="user-email">Email:</label>
                <input type="text" id="user-email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>

                <label htmlFor="user-pass">Password:</label>
                <input type="password" id="user-pass" value={pass} onChange={(e) => {setPass(e.target.value)}}/>

                <label htmlFor="user-conform-pass">Conform Password:</label>
                <input type="password" id="user-conform-pass" value={conform_pass} onChange={(e) => {setConformPass(e.target.value)}}/>

                <button className="user-signup-btn" >Create User</button>
            </div>
        </>
    )

}

export default User_Signup