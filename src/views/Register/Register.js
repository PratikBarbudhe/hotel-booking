import React, { useState } from "react";
import "./Register.css";

const MultiInputs = () => {

    const [userReistration, setUserRegistration] = useState({
        username: " ",
        email: " ",
        phone: " ",
        password: " "
    });

   const handleInput = () => {

   }

}

function Register () {
    return(
        <>
        <form action="" className="register-container">
            <div>
                <lable for="username">username</lable>
                <input type="text" autoComplete="off" 
                 value={userReistration.username}
                 onChange={handleInput}
                name="usename" id="username"/>
            
            </div>

            <div>
                <lable for="email">email</lable>
                <input type="email" autoComplete="off" 
                  value={userReistration.email}
                  onChange={handleInput}
                name="email" id="email"/>
            </div>

            <div>
                <lable for="phone">phone</lable>
                <input type="text" autoComplete="off"
                  value={userReistration.phone}
                  onChange={handleInput}
                name="phone" id="phone"/>
            </div>

            <div>
                <lable for="password">password</lable>
                <input type="text" autoComplete="off" 
                  value={userReistration.password}
                  onChange={handleInput}
                name="password" id="password"/>
            </div>

            <button type="submit">Registration</button>
        </form>

        </>
    )

}

export default Register