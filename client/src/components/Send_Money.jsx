import React from "react";
import NavBar from "./NavBar";
import "../css files/send_money.css";
import { useState } from "react";
import CustomAleart from "./Custom_Aleart";

const Send_Money = () => {
    
    const [ph,setPh] = useState("")
    const [msg,setMsg] = useState("")
    const [amt, setAmt] = useState("")
    const [haveVal,setHaveVal] = useState(false)
    const [btnClicked, setBtnClicked] = useState(false)

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
                <input type="tel" name="phone_no" placeholder="Recivers Phone No." onChange={(e) => {setPh(e.target.value)}}/>
                <input type="number" name="amt" placeholder="Amount" onChange={(e) => {setAmt(e.target.value)}}/>
                <input type="text" name="msg" placeholder="Message If Any"  onChange={(e) => {setMsg(e.target.value)}}/>
                <button className="send-money-btn" onClick={() => {filedEmpty(ph,msg);setBtnClicked(true)}}>Send</button>
            </div>

        </>
    )
}

export default Send_Money