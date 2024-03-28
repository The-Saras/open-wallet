import React from "react";
import NavBar from "./NavBar";
import '../css files/transactions.css'
import { useState } from "react";
import { useEffect } from "react";

const Transcations_Page = () => {

    
    const [temp,setTemp] = useState([]);
    useEffect(() => {
        for(let i = 0; i < 10; i++){
            setTemp((val) => [...val,i])
        }
        
    },[])
    console.log(temp);
    return(
        <>
            <div className="trans-navbar">
                <NavBar />
            </div>
            <div className="trans-main-section">
                {/* space for balance component  */}
                {
                    temp.forEach((trans) => {
                            console.log(trans);
                            <ul>
                                <span key={trans}>
                                    <li>{trans}</li>
                                </span>
                            </ul>
                    })

                }
            </div>
        </>
    )
}
export default Transcations_Page