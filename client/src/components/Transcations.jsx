import React from "react";
import NavBar from "./NavBar";
import '../css files/transactions.css'

const Transcations_Page = () => {

    const [temp,setTemp] = useState([]);
    return(
        <>
            <div className="trans-navbar">
                <NavBar />
            </div>
            <div className="trans-main-section">
                {/* space for balance component  */}
                
            </div>
        </>
    )
}
export default Transcations_Page