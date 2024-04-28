import React, { useEffect } from "react";
import "../css files/navbar.css"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
const NavBar = ({isSigndUp, setIsSignedUp}) => {

    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [isDropDown,setIsDropDown] = useState(false)
    const fetchUser = async()=>{
        try{
            const reesponse = await fetch('http://localhost:3000/user/getuser',{
                method:'GET',
                headers:{
                    "auth-token":localStorage.getItem('jsonwebtoken')
                }
            })
            const data = await reesponse.json();
            const name = data.name
            setUser(name);
            
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{fetchUser() },[])


    return(
        <>
            {user? 
                <div className="navbar">
                    <h2 className="navbar-title">UPI CLONE</h2>
                    <ul style={{position: 'absolute', left: 90 + '%', width: 5 + '%', height: 30 + '%'}} onMouseLeave={() => {setIsDropDown(false)}}>
                        <li className="navbar-username" style={{position: 'relative', left: -15 + '%'}}  onMouseEnter={() => {setIsDropDown(true)}} >{user}</li>
                        {/* <li style={{position: 'relative', left: -400 + '%'}} onClick={() => {navigate('/')}}>Home</li>
                        <li onClick={() => {navigate('/send_money')}}>Send Money</li>
                        <li onClick={() => {navigate('/account_details')}}>Account Details</li> */}
                    </ul>
                    {isDropDown && (
                            <div className="dropdown-content" onMouseEnter={() => {setIsDropDown(true)}} onMouseLeave={() => {setIsDropDown(false)}}>
                                <button onClick={() => {
                                    localStorage.clear();
                                    location.reload();
                                }}>Logout</button>
                            </div>
                        )}
                </div>
                : 
                <div className="navbar">
                    <h2 className="navbar-title">UPI CLONE</h2>
                    <ul>
                        <li onClick={() => {navigate('/')}}>Home</li>
                        <li onClick={() => {navigate('/send_money')}}>Send Money</li>
                        <li onClick={() => {navigate('/account_details')}}>Account Details</li>
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