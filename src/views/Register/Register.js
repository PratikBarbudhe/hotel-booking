import React, { useState } from "react";
import "./Register.css";

function Register () {
    return(
        <>
        <div className="register-container">
            <h1>Registration form</h1>
            
        <form >
          
          <input type="text"  
          placeholder="username"
          className="user-input"
          name="usename" />
        
          <input type="email" 
           placeholder="email"
           className="user-input"
          name="email" />
          
          <input type="text" 
           placeholder="phone"
           className="user-input"
          name="phone"/>
     
          <input type="password" 
           placeholder="password"
           className="user-input"
          name="password" />
      

         <button type="button"
         className="register-btn"
         >Registration</button>
        </form>
        </div>

        <div className="show-register">


        </div>


        </>
    )

}

export default Register