import React from "react";
import NavBar from "./NavBar";
import '../css files/account_details.css'
const Account_Details = () => {
    return(
        <>
            <div className="account-details-navbar">
                <NavBar />
            </div>
            <div className="account-details-main">
                <div className="account-details-logo"></div>
                <div className="account-info-label">
                    <p>Name:</p>
                    <p>Email:</p>
                    <p>Phone Number:</p>
                    <p>Balance:</p>
                    <p>Account Type:</p>
                </div>
                <div className="account-info-details">
                    <p>jack</p>
                    <p>temp@gmail.com</p>
                    <p>12345678902</p>
                    <p>1000$</p>
                    <p>Saving A/C</p>
                </div>

            </div>
        </>
    )
}

export default Account_Details