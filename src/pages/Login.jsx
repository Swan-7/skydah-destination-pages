import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../components/NavBar";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "../styles/Login.scss";

const Login = () => {

    const [emaillog, setEmaillog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const navigate = useNavigate();

    const handleCheckboxChange = () => {
        setRememberMe(!rememberMe);
    };

    const toggleVisibility = () => {
        setPasswordVisible(!passwordVisible);
    }

    function handleLogin(e) {
        e.preventDefault();
        let mail = localStorage.getItem("Email");
        let pass = localStorage.getItem("Password");

        if (mail !== null) {
            mail = mail.replace(/"/g, "");
        }
        if (pass !== null) {
            pass = pass.replace(/"/g, "");
        }

        if (!emaillog || !passwordlog) {
            toast.error(
                <div>
                        Please fill Corrrect info
                </div>,
                {
                    className: "error-toast",
                    autoClose: 5000,
                    closeOnClick: true,
                    position: toast.POSITION.TOP_RIGHT,
                    hideProgressBar: true,
                });
            console.log("Empty");
        } else if (passwordlog !== pass || emaillog !== mail) {
            toast.error(
                <div>
                        Incorrect Username or Password
                </div>,
                {
                    className: "error-toast",
                    autoClose: 5000,
                    closeOnClick: true,
                    position: toast.POSITION.TOP_RIGHT,
                    hideProgressBar: true,
                });
        } else {
            toast.success(
                <div>
                    Login Successful.......
                    <br />
                    Dashboard loading few seconds
                </div>,
                {
                    className: "custom-toast",
                    autoClose: 2000,
                    closeOnClick: true,
                    position: toast.POSITION.TOP_RIGHT,
                    hideProgressBar: true,
                });
                setTimeout(() => {
                    navigate('/dashboard');
                  }, 3000);
        }
    }

    return (
        <div>
        <NavBar/>
            <form onSubmit={handleLogin} className="Login">
                <div className="header">
                    <h2>Sign In</h2>
                    <h4>Create an account to continue</h4>
                </div>

                <div className="content">
                    <input 
                    type="email" 
                    placeholder="Email address"
                    onChange={(event) => setEmaillog(event.target.value)}
                    />

                    <div className={`password-toggle ${passwordVisible ? 'show' : 'hide'}`}>
                        <input 
                        type={passwordVisible ? 'text' : 'password'}
                        placeholder="Password"
                        onChange={(event) => setPasswordlog(event.target.value)}
                        />
                        <div className="toggle-icon" onClick={toggleVisibility} />
                    </div>

                    <div className="content-section">
                        <div className="checkbox">
                            <label>
                                <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={handleCheckboxChange}
                                />
                                Remember Me
                            </label>
                        </div>
                        <a className="forgot-password" href="">Forgot Password</a>
                    </div>

                    <button type="submit" className="btn">Sign in</button>

                    <p>Don't have an account? <span><Link to="/signup">Sign up</Link></span></p>
                </div>
            </form>

        </div>

    );
}

export default Login;
