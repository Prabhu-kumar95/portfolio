import React from "react";
import { Link } from "react-router-dom";

const Myproject = ()=>{
    return(
        <div>
        <div className="marvel">
         <img src="https://codingartistweb.com/wp-content/uploads/2023/04/marvel-api-01.png" alt="..."></img>
         
        </div>
        <div className="button1">
        <Link to="https://marvelcomiks.netlify.app/" className="btn ">Visit Site</Link>
    </div>
    <div className="weather">
         <img src="https://app.accuweather.com/hubfs/WinterCast-Aug-08-2023-02-19-16-3285-PM.png" alt="..."></img>
         
        </div>
        <div className="button1">
        <Link to="https://weather-state-api.netlify.app/" className="btn ">Visit Site</Link>
    </div>
    <div className="currency">
         <img src="https://codingartistweb.com/wp-content/uploads/2023/02/currency-converter-01.png" alt="..."></img>
         
        </div>
        <div className="button1">
        <Link to="https://currency-coverter-api.netlify.app/" className="btn ">Visit Site</Link>
    </div>
    <div className="button2">
        <Link to="https://github.com/Prabhu-kumar95?tab=repositories" className="btn1 ">View My All Work</Link>
    </div>
    </div>
    )
}
export default Myproject;