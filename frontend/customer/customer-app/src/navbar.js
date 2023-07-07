import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css'

const NavBar = () =>{
    return(
        <div className="Nav-bar">
            <div className='links'>
                <div className='profile'>
                
                </div>
                <div className='query'>
                        <form>
                            <input type='text' placeholder='Enter product name here...' required='true'/>
                        </form>
                    </div>
                <Link to='/'>Shop</Link>
                <Link to='/login'>Log In/Sign Up</Link>
            </div>
        </div>
    );
}

export default NavBar;