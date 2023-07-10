import React from 'react';
import Navbar from './navbar';
import GreetTag from './welcome-tag';

function Customer (){
    const customer_list = () =>{
        let customer = ["Kofi", "Kwame"];
        
        return customer;
    }
    return(
        <div className='customers'>
            <Navbar title="CUSTOMERS"/>
            <div className='customer-content'>
                <div className='customer-rep'>
                    {
                        customer_list().map((item, index) =>(
                            <button>{item}</button>
                        ))
                    }
                </div>
                <div className='customer-details'>
                    <GreetTag greeting="Customer Details"/>
                </div>
            </div>
        </div>
    );
}

export default Customer;