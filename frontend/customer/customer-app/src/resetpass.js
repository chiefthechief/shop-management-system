import React from 'react';
import './login.css';
import './index.css';
import GreetTag from './welcome-tag';
const exec = require("./execution");


function Reset (){
    return (
        <div className='page'>
            <GreetTag name="to SH"/>
            <h1>Reset Password</h1>
            <form className='form-section'>
                <div className='input-section'>
                    <input placeholder='Enter email' type='email'/>
                </div>
                <div className='exec-section'>
                    <button onClick={exec.login} className='login'><b>REQUEST RESET</b></button>
                </div>
            </form>
        </div>
    );
}

export default Reset;