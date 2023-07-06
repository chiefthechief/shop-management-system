import React from 'react';
import {Link} from 'react-router-dom'

function Navbar(){
    return (
        <div className='nav-bar'>
            <div className='links'>
                <Link to="/tellers">TELLERS</Link>
                <Link to="/customers">CUSTOMERS</Link>
                <Link to="/sales">SALES</Link>
                <Link to="/inventory">INVENTORY</Link>
                <Link to="/suppliers">SUPPLIERS</Link>
                <Link to="/deliveries">DELIVERIES</Link>
            </div>
        </div>
    );
}

export default Navbar;