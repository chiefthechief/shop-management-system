import React from 'react';
import {Link} from 'react-router-dom';
import logo from './img/shop.svg'
import './login.css';
const sign_up = require('./execution');


function SignUp(){

    return(
        <div className='page-signup'>
             <div className='logo'>
                <img src={logo} alt='logo'/>
                {/* <h3>Sign Up</h3> */}
            </div>
                <form className='form-section'>
                    <div className='input-section-signup'>
                        <input placeholder='First Name' type='text' id='first_name'  required='true'/>
                        <input placeholder='Last Name' type='text' id='last_name'  required='true'/>
                        <input placeholder='Tel Number' type='tel'id='last_name'  required='true'/>
                        <input placeholder='Email' type='email' id='email'  required='true'/>
                        <input placeholder='Password' type='password' id='pass'  required='true'/>
                        <input placeholder='Confirm Password' type='password' id='pass'  required='true'/>
                    </div>
                    <div className='exec-section'>
                        <button onClick={sign_up.sign_up}>Register</button>
                        <Link to='/login'>Already have account? Login</Link>
                    </div>
                </form>
        </div>
    );
}

export default SignUp;