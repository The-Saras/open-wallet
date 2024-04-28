import React from "react";
import NavBar from "./NavBar";
import "../css files/send_money.css";
import { useState } from "react";
import CustomAleart from "./Custom_Aleart";

const Send_Money = () => {
    
    const [ph,setPh] = useState("")
    const [msg,setMsg] = useState("")
    const [amt, setAmt] = useState("")
    const [pin, setPin] = useState("")
    const [haveVal,setHaveVal] = useState(false)
    const [btnClicked, setBtnClicked] = useState(false)

    const handleSubmit =async(e)=>{
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/account/transfer",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token":localStorage.getItem('jsonwebtoken')
                },
                body:JSON.stringify({amount:amt,to:ph,pin:pin})
            })
            const data = await response.json();
            if(data){
                alert("Amount Sent....");
            }
        } catch (error) {
            alert("Error: ",error);
        }
    }

    const filedEmpty = (ph,msg) => {
        if(ph != "" && msg != "" && amt != "")
        {
            setHaveVal(true)
            setBtnClicked(false)
        }
        else
        {
            setHaveVal(false);
            setBtnClicked(false)
        }
        
    }
    return(
        <>
            <div className="send-money-navbar">
                <NavBar />
            </div>
            <div>
                {btnClicked? 
                    haveVal ? <CustomAleart pos={"16"} msg={"Amount Sent...."}  /> : <CustomAleart pos={"16"} msg={"Error: Fill all the details first."} />

                                :
                    <></>
                }
                        
            </div>
            <div className="send-money-main">
                <h2 className="send-money-title">SEND MONEY</h2>
                <p>Send To:</p>
                <input type="tel" name="phone_no" value={ph} placeholder="Recivers Phone No." onChange={(e) => {setPh(e.target.value)}}/>
                <input type="number" name="amt" value={amt} placeholder="Amount" onChange={(e) => {setAmt(e.target.value)}}/>
                <input type="password" name="pin" value={pin} placeholder="Enter Your Pin" onChange={(e) => {setPin(e.target.value)}}/>
                <input type="text" name="msg"  value={msg} placeholder="Message If Any"  onChange={(e) => {setMsg(e.target.value)}}/>
                <button className="send-money-btn" onClick={handleSubmit}>Send</button>
            </div>

        </>
    )
}

export default Send_Money