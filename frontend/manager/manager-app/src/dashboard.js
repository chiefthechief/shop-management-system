import React from 'react';
import Navbar from './navbar';

function DashBoard(){

    return(
        <div className='dashboard-dashboard'>
            <Navbar title="DASHBOARD"/>
            <div className='dashboard-content'>
                <div className='dashboard-display'>
                    <div className='first-level'>
                        <div className='dashboard-sales'>
                            <h3>Sales</h3>
                        </div>
                        <div className='dashboard-inventory'>
                            <h3>Inventory</h3>
                        </div>
                    </div>
                    <div className='second-level'>
                        <div className='dashboard-teller'>
                            <h3>teller</h3>
                        </div>
                        <div className='dasboard-customer'>
                            <h3>Customer</h3>
                        </div>
                    </div>
                    <div className='third-level'>
                        <div className='dasboard-supplier'>
                           <h3>Supplier</h3>
                        </div>
                        <div className='dashboard-delivery'>
                           <h3>Delivery</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashBoard;