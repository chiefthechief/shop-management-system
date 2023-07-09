import React from 'react';
import Navbar from './navbar';
import GreetTag from './welcome-tag';

function Customer (){
    return(
        <div className='customers'>
            <Navbar/>
            <div className='header'>
                    <h1>Customer</h1>
                </div>
            <div className='customer-content'>
                <div className='customer-rep'>

                </div>
                <div className='customer-details'>
                    <GreetTag greeting="Customer Details"/>
                </div>
            </div>
        </div>
    );
}

export default Customer;