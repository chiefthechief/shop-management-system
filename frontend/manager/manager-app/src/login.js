import React from 'react';
import {Link} from 'react-router-dom'
import './login.css';

function Login (){
    return (
        <div className='page'>
            <h1>LOGIN</h1>
            <form className='form-section'>
                <div className='input-section'>
                    <input type='email' placeholder='Enter email'/>
                    <br/>
                    <input type='password' placeholder='Enter password'/>
                </div>
                <div className='exec-section'>
                    <button onClick={""} className='login'><b>LOG IN</b></button>
                    <br/>
                    <button className='sign-up'>Sign Up</button>
                    <Link to="/reset">Forgot password?</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;