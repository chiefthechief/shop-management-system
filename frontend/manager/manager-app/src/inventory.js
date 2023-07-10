import React from 'react';
import Navbar from './navbar';
import './all.css';
import search from './img/search.svg'
import plus from './img/plus.png'
import { useNavigate } from 'react-router-dom';

function Inventory (){

    const navigate = useNavigate();

    const product_list = () => {
        let products = [
            {
                name:"Milk",
                Qty: "200",
                price: "$200"
            }
        ];

        return products;
    }

    return(
        <div className='inventory'>
            <Navbar title='INVENTORY'/>
            <div className='inventory-content'>
                <div className='top'>
                <form className='search-space'>
                    <input type='text' placeholder='Search Inventory' required="true"/>
                    <button><img src={search} alt='search'/></button>
                </form>
                <div className='add-inventory'>
                    <button onClick={()=> navigate('/add')}><img src={plus} alt='add inventory'/></button>
                </div>
                </div>
                <div className='inventory-products'>
                    {
                        product_list().map((item, index) =>(
                            <div className='tab'>
                                <h2>{item.name}</h2>
                                <p>{item.Qty}</p>
                                <p>{item.price}</p>
                                </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Inventory;