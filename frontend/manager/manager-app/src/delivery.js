import React from 'react';
import Navbar from './navbar';

function Delivery (){

    const delivery = () =>{
        let id = ["1234", "6789", "4387"];
        let deliverer = ["Kwame", "Akwasi", "Kwadwo"];
        let customer = ["Doug", "Peter", "alb"];
        let location = ["Odorkor", "Awoshie", "Kumasi"];
        let order_number = ["q213", "1331", "314", "3414"];
        let order_progress = ["Done", "Not yet", "in-progress"];
        let order_progress_c = ["Done", "Not yet", "in-progress"];

        //function to fill the list goes in here

        let deliveries =
            {
                delivery_id : id,
                deliverer : deliverer,
                customer : customer,
                location : location,
                order_number : order_number,
                order_progress: order_progress,
                customer_progress: order_progress_c
            }

        return deliveries;
    }
     
    return(
        <div className='delivery-delivery'>
            <Navbar title="DELIVERY"/>
            <div className='delivery-content'>
                <div className='delivery-id'>
                   <h3>Delivery id</h3>
                    {
                        delivery()["delivery_id"].map((items, index) =>(
                            <p>{items}</p>
                        ))
                    }
                </div>
                <div className='deliverer-name'>
                   <h3>Deliverer</h3>
                   {
                        delivery()["deliverer"].map((items, index) =>(
                            <p>{items}</p>
                        ))
                    }
                </div>
                <div className='customer-name'>
                   <h3>Customer</h3>
                   {
                        delivery()["customer"].map((items, index) =>(
                            <p>{items}</p>
                        ))
                    }
                </div>
                <div className='customer-location'>
                    <h3>Location</h3>
                    {
                        delivery()["location"].map((items, index) =>(
                            <p>{items}</p>
                        ))
                    }
                </div>
                <div className='order-number'>
                    <h3>Order Number</h3>
                    {
                        delivery()["order_number"].map((items, index) =>(
                            <p>{items}</p>
                        ))
                    }
                </div>
                <div className='order-progress'>
                   <h3>Order Progress</h3>
                    {
                        delivery()["order_progress"].map((items, index) =>(
                            <p >{items}</p>
                        ))
                    }
                </div>
                <div className='customer-progress'>
                   <h3>Customer Feedback</h3>
                    {
                        delivery()["customer_progress"].map((items, index) =>(
                            <p>{items}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Delivery;