import React from "react";
import Resume from "../Images/Resume.pdf"

const AboutMe = ()=>{
    return(
        <div>
        <div className="container1"> 
            <div className="para"> 
            <h1><b style={{color:"aqua"}}>About</b></h1>
             <h1>Myself <b style={{color:"aqua"}}>Prabhu Kumar</b> a aspiring <b style={{color:"aqua"}}>Fullstack Developer </b></h1>
             <p className="para">Iam a Fullstack React Developer with a Passion of developing different complex web applications.</p>
            </div>
        </div>
        <a href={Resume} download="Resume">
        <div className="button2">
           <button className="btn2">Download CV</button>
        </div>
        </a>
        </div>
    )
}
export default AboutMe;