import React from "react";

function Register () {
    return(
        <>
        <form action="">
            <div>
                <lable for="username">username</lable>
                <input type="text" name="usename" id="username"/>
            </div>

            <div>
                <lable for="email">email</lable>
                <input type="email" name="email" id="email"/>
            </div>

            <div>
                <lable for="phone">phone</lable>
                <input type="text" name="phone" id="phone"/>
            </div>

            <div>
                <lable for="password">password</lable>
                <input type="text" name="password" id="password"/>
            </div>
        </form>

        </>
    )

}

export default Register