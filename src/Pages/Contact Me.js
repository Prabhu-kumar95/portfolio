import React from "react";

const ContactMe = ()=>{
    return(
        <div>
        <div className="container1"> 
            <div className="para"> 
            <h1><b style={{color:"aqua"}}>Contact Me</b></h1>
             <h2>You Can Contact me Through </h2>
             </div>
            
        </div>
        <div className="maillogo">
                <img src="https://cdn-icons-png.flaticon.com/512/552/552486.png" alt="..."></img><span><h3 className="mail">a.b.prabhu268@gmail.com</h3></span>
             </div>
             <div className="phonelogo">
                <img src="https://static-00.iconduck.com/assets.00/whatsapp-line-logo-icon-2048x2048-059kk1vz.png" alt="..."></img><span><h3 className="phone">9150645022</h3></span>
             </div>
       
        </div>
    )
}
export default ContactMe;