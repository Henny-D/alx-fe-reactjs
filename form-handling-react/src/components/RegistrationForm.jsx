import React from 'react'
import { useState } from 'react'

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});


    const validateForm =()=>{
        let tempErrors={};
        if (!username)tempErrors.username="Username is required";
        if (!email) tempErrors.email= "Valid Email Adress is required";
        if (!password) tempErrors.password= "A valis password required";
        setErrors(tempErrors);

        return Object.keys(tempErrors).length===0;
    };
    
    const handleSubmit =(e) =>{
        e.preventDefault();
        if (validateForm()){
            console.log("Form Submitted Successfully!", { username, email, password });
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
                value={username}
                onChange={(e)=> setUsername(e.target.value)} />
               {errors.username && <p style={{color:"red"}}> {errors.username}</p>
            </div>

            <div>
               <label>Email:</label>
               <input
               type="email"
               name="email"
               value={email}
               onChange={(e) => setEmail (e.target.value)} />
              {errors.email && <p style={{color:"red"}}> {errors.email}</p>
            </div>

            <div>
               <label>Password:</label>
               <input
               type="password"
               name="password"
               value={password}
               onChange={(e) => setPassword (e.target.value)}/>
              {errors.password && <p style={{color:"red"}}> {errors.password}</p>
            </div>

            <button type='submit'>Register</button>
        </form>
    </div>
  );
};

export default RegistrationForm