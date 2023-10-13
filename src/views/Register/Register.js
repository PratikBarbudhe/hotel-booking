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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;