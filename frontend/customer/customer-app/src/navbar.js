import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () =>{
    return(
        <div className="Nav-bar">
            <Link to='/'>Shop</Link>
            <Link to='/login'>Log In/Sign Up</Link>
        </div>
    );
}

export default NavBar;