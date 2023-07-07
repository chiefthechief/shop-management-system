import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Link} from "react-router-dom";
import './login.css';
import './index.css';
import GreetTag from './welcome-tag';
const exec = require("./execution");


function Login (){
    return (
        <div className='page' onSubmit={exec.login}>
            <GreetTag name="to SH"/>
            <h1>LOGIN</h1>
            <form className='form-section'>
                <div className='input-section'>
                    <input type='email' placeholder='Enter email'/>
                    <br/>
                    <input type='password' placeholder='Enter password'/>
                </div>
                <div className='exec-section'>
                    <button type='submit' className='login'><b>LOG IN</b></button>
                    <br/>
                </div>
            </form>
            <button className='sign-up' onClick={()=>{
                // const navigate = useNavigate;
                // navigate('/signup')
            }}>Sign Up</button>
            <Link to="/reset">Forgot password?</Link>
        </div>
    );
}

export default Login;