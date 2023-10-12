import React, { useState } from "react";
import "./Register.css";

function Register () {
    const [register, setRegister] = useState([
        {
            username: "achal",
            email: "achal@gmail.com",
            phone: "678987655",
            password: "achal@123"

        }
    ]);

    //const [username, setUsername] = useState('');
    //const [email, setEmail] = useState('');
    //const [phone, setPhone] = useState('');
    //const [password, setPassword] = usernamee('');

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
            <h2>Show-register</h2>
            



        </div>


        </>
    )

}

export default Register

 //register.map((registers, index) => {
   // const  {username, phone, email, password} = registers;
     //return (
      //  <RegisterCard/>
        //key={index}
        //usenamename={registers.username}
        //email={registers.email}
        //password={registers.password}
    //)
//}) 