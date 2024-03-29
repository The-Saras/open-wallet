import React from "react";
import NavBar from "./NavBar";
import '../css files/transactions.css'
import { useState } from "react";
import { useEffect } from "react";

const Transcations_Page = () => {

    
    const [temp,setTemp] = useState([]);
    const [color,setColor] = useState('');
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(json => setTemp(json))
        
    },[])
    console.log(temp);

    const trans_checker = (Deposit) => {
        if(Deposit != ""){
            setColor('#3FFF00');
        }
        else{
            setColor('red');
        }
    }

    useEffect(() => {
        temp.forEach(trans => {
            trans_checker(trans.phone)
        })

    },[temp])

    return(
        <>
            <div className="trans-navbar">
                <NavBar />
            </div>
            <div className="trans-main-section">
                <ul className="trans-titles">
                    <li>Date</li>
                    <li>Transaction Details</li>
                    <li>Withdrawals</li>
                    <li>Deposits</li>
                    <li>Balance</li>
                </ul>
                <ul>
                    {temp.map(trans => {
                    return(
                            <span key={trans.id}>
                                <li>{trans.name}</li>
                                <li>{trans.email}</li>
                                <li style={{color: color}}>{trans.id}</li>
                                <li style={{color: color}}>{trans.phone}</li>
                                <li>{trans.username}</li>
                            </span>

)
                    })}
                </ul>
            </div>
        </>
    )
}
export default Transcations_Page