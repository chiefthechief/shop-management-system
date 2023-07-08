import React from 'react';
import Navbar from './navbar';
import './all.css';
import search from './img/search.svg'
import plus from './img/plus.png'
import { useNavigate } from 'react-router-dom';

function Inventory (){

    const navigate = useNavigate();

    return(
        <div className='inventory'>
            <Navbar/>
            <div className='content'>
                <form className='search-space'>
                    <input type='text' placeholder='Search Inventory' required="true"/>
                    <button><img src={search} alt='search'/></button>
                </form>
                <div className='add-inventory'>
                    <button onClick={()=> navigate('/add')}><img src={plus} alt='add inventory'/></button>
                </div>
            </div>
        </div>
    );
}

export default Inventory;