import React, { useState } from 'react';
import "./Register.css";
import showToast from "crunchy-toast";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

<<<<<<< HEAD
    const [userReistration, setUserRegistration] = useState({
        username: " ",
        email: " ",
        phone: " ",
        password: " "
    });

    const [records, setRecords] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setUserRegistration({...userReistration, [name]: value });

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRecord = {...userReistration, id: new Date().getTime().toString() }

        setRecords([...records, newRecord]);
    }
=======
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to server
    console.log('Form submitted:', formData);
    showToast('Contacts Added Successfully ','success', 3000);

    
  };
>>>>>>> 516e1918f129931bc075b8db59a9e10cc5e02a23

  return (
    <div className="registration-form">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} className='register-form'>
        <div className="form-group">
          <input
            type="text"
            placeholder='firstName'
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className='input-user'
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder='lastName'
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className='input-user'
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder='email'
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className='input-user'
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder='password'
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className='input-user'
          />
        </div>
        <button type="submit" className='register-btn'>Register</button>
      </form>
    </div>
  );
};

<<<<<<< HEAD
function Register() {
    return ( <
        >
        <
        form action = ""
        className = "register-container"
        onSubmit = { handleSubmit } >
        <
        div >
        <
        lable
        for = "username" > username < /lable> <
        input type = "text"
        autoComplete = "off"
        value = { userReistration.username }
        onChange = { handleInput }
        name = "usename"
        id = "username" / >

        <
        /div>

        <
        div >
        <
        lable
        for = "email" > email < /lable> <
        input type = "email"
        autoComplete = "off"
        value = { userReistration.email }
        onChange = { handleInput }
        name = "email"
        id = "email" / >
        <
        /div>

        <
        div >
        <
        lable
        for = "phone" > phone < /lable> <
        input type = "text"
        autoComplete = "off"
        value = { userReistration.phone }
        onChange = { handleInput }
        name = "phone"
        id = "phone" / >
        <
        /div>

        <
        div >
        <
        lable
        for = "password" > password < /lable> <
        input type = "text"
        autoComplete = "off"
        value = { userReistration.password }
        onChange = { handleInput }
        name = "password"
        id = "password" / >
        <
        /div>

        <
        button type = "submit" > Registration < /button> <
        /form>

        <
        />
    )

}

export default Register
=======
export default RegistrationForm;
>>>>>>> 516e1918f129931bc075b8db59a9e10cc5e02a23
