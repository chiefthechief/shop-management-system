import React from 'react';
import {Link} from "react-router-dom";
import './login.css';
import './index.css';
import GreetTag from './welcome-tag';
const exec = require("./execution");


function Login (){
    return (
        <div className='page'>
            <GreetTag name="to SH"/>
            <h1>LOGIN</h1>
            <form className='form-section'>
                <div className='input-section'>
                    <input/>
                    <br/>
                    <input/>
                </div>
                <div className='exec-section'>
                    <button onClick={exec.login} className='login'><b>LOG IN</b></button>
                    <br/>
                    <button className='sign-up'>Sign Up</button>
                    <Link to="/reset">Forgot password?</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;