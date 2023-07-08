import React from 'react';
import {Link} from 'react-router-dom';
import GreetTag from './welcome-tag';
import './login.css';

function Login (){
    return (
        <div className='page'>
            <GreetTag greeting="Welcome to SH"/>
            <h1>LOGIN</h1>
            <form className='form-section'>
                <div className='input-section'>
                    <input type='email' placeholder='Enter email' required="true"/>
                    <br/>
                    <input type='password' placeholder='Enter password' reequired="true"/>
                </div>
                <div className='exec-section'>
                    <button onClick={""} className='login'><b>LOG IN</b></button>
                    <br/>
                    <Link to="/reset">Forgot password?</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;