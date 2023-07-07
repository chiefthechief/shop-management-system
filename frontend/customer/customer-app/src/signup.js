import React from 'react';
import {Link} from 'react-router-dom';
import './login.css';
const sign_up = require('./execution');


function SignUp(){

    return(
        <div className='page'>
            <h3>Register here</h3>
                <form className='form-section'>
                    <div className='input-section'>
                        <input placeholder='First Name' type='text' id='first_name'/>
                        <input placeholder='Last Nmae' type='text' id='last_name'/>
                        <input placeholder='Tel Number' type='number'id='last_name'/>
                        <input placeholder='Email' type='email' id='email'/>
                        <input placeholder='Password' type='password' id='pass'/>
                        <input placeholder='Confirm Password' type='password' id='pass'/>
                    </div>
                    <div className='exec-section'>
                        <button onClick={sign_up.sign_up}></button>
                        <Link>Already have account? Login</Link>
                    </div>
                </form>
        </div>
    );
}

export default SignUp;