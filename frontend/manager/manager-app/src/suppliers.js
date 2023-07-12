import React from 'react';
import Navbar from './navbar';
import plus from './img/plus.svg'

const load_supplier = () =>{
    
    let names = ["redco", "meetwing", "case.ro"];
    let products = ["milk", "milo", "cake"];
    let contacts = ["02456712", "054237845", "057234565"];

    let suppliers = {
            name: names,
            product: products,
            contact: contacts
        };

    return suppliers;
}

function Supplier (){
    return(
        <div className='suppliers'>
            <Navbar  title ="SUPPLIER"/>
            <div className='add-supplier'>
                    <button ><img src={plus} alt='add supplier'/></button>
                </div>
            <div className='supplier-content'>
                <div className='supplier-product'>
                    <h4>Product</h4>
                    {
                        load_supplier()["product"].map((item, index) =>(
                            <p>{item}</p>
                        ))
                    }
                </div>
                <div className='supplier-name'>
                    <h4>Supplier</h4>
                    {
                        load_supplier()["name"].map((item, index) =>(
                            <p>{item}</p>
                        ))
                    }
                </div>
                <div className='supplier-contact'>
                    <h4>Contact</h4>
                    {
                        load_supplier()["contact"].map((item, index) =>(
                            <p>{item}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Supplier;