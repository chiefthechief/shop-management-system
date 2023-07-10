import React from 'react';
import {Link} from 'react-router-dom'
import logo from './img/shop.svg'
import './nav.css'
import menu_logo from './img/menu.png'

function Navbar(props){
    return (
        <div className='nav-bar'>
            <div className='logo'>
                <img src={logo} alt='logo'/>
            </div>
            <div className='nav-header'>
                <div className='title'><h2>{props.title}</h2></div>
                <div className='drop-down'>
                    <button className='drop-btn'>
                        <img src={menu_logo} alt='menu'/>
                        <i className='down'></i>
                    </button>
                    <div className='drop-down-content'>
                        <Link to="/tellers">TELLERS</Link>
                        <Link to="/customers">CUSTOMERS</Link>
                        <Link to="/sales">SALES</Link>
                        <Link to="/inventory">INVENTORY</Link>
                        <Link to="/suppliers">SUPPLIERS</Link>
                        <Link to="/deliveries">DELIVERIES</Link>
                        <Link to="/">DASHBOARD</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;