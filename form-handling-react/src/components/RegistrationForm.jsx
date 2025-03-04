import React from 'react'
import { useState } from 'react'

function RegistrationForm() {
    const[formData, setFormData]=useState({
        username:"",
        email:"",
        password:"",
    });

    const [errors,setErrors] =useState({});

    const handleChange=(e) => {
    const {name, value } =e.target;
    setFormData({...formData, [name]: value});
    };

    const validateForm =()=>{
        let tempErrors={};
        if (!formData.username)tempErrors.username="Username is required";
        if (!formData.email || !formData.email.includes ("@")) tempErrors.email= "Valid Email Adress is required";
        if (!formData.password || formData.password.length<3) tempErrors.password= "A valis password required (atleast 3 characters)");

        setErrors(tempErrors);
        return Object.keys(tempErrors).length===0;
    };
    
    const handleSubmit =(e) =>{
        e.preventDefault();
        if (validateForm()){
            console.log ("Form submitted! :", formData);
        }
    };

      return (
    <div>
        <h2>RegistrationForm</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
               />
               {errors.username && <p style={{color:"red"}}> {errors.username}</p>
            </div>

            <div>
               <label>Email:</label>
               <input
               type="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
              />
              {errors.email && <p style={{color:"red"}}> {errors.email}</p>
            </div>

            <div>
               <label>Password:</label>
               <input
               type="password"
               name="password"
               value={formData.password}
               onChange={handleChange}
              />
              {errors.password && <p style={{color:"red"}}> {errors.password}</p>
            </div>

            <button type='submit'>Register</button>
        </form>
    </div>
  );
};

export default RegistrationForm