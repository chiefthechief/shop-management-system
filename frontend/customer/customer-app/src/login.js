import React from 'react';
import logo from './img/shop.svg';
import {Link, useNavigate} from "react-router-dom";
import './login.css';
import './index.css';
const exec = require("./execution");


function Login (){

    const navigate = useNavigate();

    return (
        <div className='page' >
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>
            <h1>LOGIN</h1>
            <form className='form-section' onSubmit={exec.login}>
                <div className='input-section'>
                    <input type='email' placeholder='Enter email' required='true'/>
                    <br/>
                    <input type='password' placeholder='Enter password'  required='true'/>
                </div>
                <div className='exec-section'>
                    <button type='submit' className='login'><b>LOG IN</b></button>
                    <br/>
                </div>
            </form>
            <button className='sign-up' onClick={()=>{navigate('/signup')}}>Sign Up</button>
            <Link to="/reset">Forgot password?</Link>
        </div>
    );
}

export default Login;