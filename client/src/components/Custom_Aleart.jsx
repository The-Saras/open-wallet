import React from "react";
import '../css files/custom_aleart.css';
import { useNavigate } from 'react-router-dom';


const CustomAleart = ({msg}) => {
    const navigate = useNavigate();

    // const aleart = ({msg}) => {
        return(
            <div className="custom-aleart">
                <p>User Created Successfully...</p>
                <button onClick={() => {navigate('/')}}>Ok</button>
            </div>
        )
    // }
    
}
export default CustomAleart