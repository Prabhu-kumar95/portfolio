import React from "react";
import { Link } from "react-router-dom";

const Home = ()=>{
    return(
        <div>
            <div className="logo">
                <img src="https://wcs.uwo.ca/upload/CE0060b.png" alt="..."></img>
            </div>
        <div className="head">
            <h1>Hi!!! Iam Prabhu a aspiring</h1>
        </div>
        <div className="head1">
            <h1>FULL STACK DEVELOPER</h1>
        </div>
        <div className="button0">
            <Link to="https://github.com/Prabhu-kumar95?tab=repositories" className="btn ">My Github</Link>
        </div>
        <div className="line"> 
             <p>hello</p>
        </div>
        </div>
    )
}
export default Home;