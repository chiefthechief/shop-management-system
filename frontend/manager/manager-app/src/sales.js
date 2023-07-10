import React from 'react';
import Navbar from './navbar';
import GreetTag from './welcome-tag'

function Sales (){
    return(
        <div className='sales'>
            <Navbar title="SALES"/>
            <div className='sales-content'>
                <div className='range'>
                    <button>DAILY</button>
                    <button>WEEKLY</button>
                    <button>MONTHLY</button>
                    <button>CUSTOM</button>
                </div>
                <div className='dashboard'>
                    <GreetTag greeting="DASHBOARD"/>
                </div>
            </div>
        </div>
    )
}

export default Sales;