import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "../styles/Login.scss";
import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const Signup = ({ toast }) => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const toggleVisibility = () => {
        setPasswordVisible(!passwordVisible);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error('Please fill out all fields')
    } else {
      const data = {name, email, password}
      console.log(data);

      navigate('/login');
      toast.success("Registration Successful Login with  your credentials",
        {
          className: "custom-toast",
          autoClose: false,
          closeOnClick: true,
          position: toast.POSITION.TOP_RIGHT,
        });

    }
  }

  function handleClick(e) {
    e.preventDefault();
  }

  return (
    <>
      <NavBar/>
      <div >
        <form onSubmit={handleSubmit} className="Login">
          <div className="header">
            <h2>Getting started</h2>
            <h5>Create an account to continue</h5>
          </div>

          <div className="content">
            <input 
            type="email" 
            placeholder="Email address"
            onChange={(event) => setEmail(event.target.value)}
            />

            <input 
            type="text" 
            placeholder="First Name Last Name"
            onChange={(event) => setName(event.target.value)}
            />

            <div className={`password-toggle ${passwordVisible ? 'show' : 'hide'}`}>
                        <input 
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Password"
                        onChange={(event) => setPassword(event.target.value)}
                        />
                        <div className="toggle-icon" onClick={toggleVisibility} />
            </div>

            <button type="submit" className="btn">Sign up</button>

            <p onClick={handleClick}>Already have an account? <span><Link to="/login">Sign in</Link></span></p>
          </div>

          
        </form>
        
      </div>
      
    </>
  );
}

export default Signup;
