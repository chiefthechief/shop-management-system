import React from 'react';
import Navbar from './navbar';

function Supplier (){
    return(
        <div className='suppliers'>
            <Navbar  title ="SUPPLIER"/>
            <div className='supplier-content'>
                <div className='supplier-product'>
                    <h4>Product</h4>
                    
                </div>
                <div className='supplier-name'>
                    <h4>Supplier</h4>
                    
                </div>
                <div className='supplier-contact'>
                    <h4>Contact</h4>
                    
                </div>
            </div>
        </div>
    );
}

export default Supplier;