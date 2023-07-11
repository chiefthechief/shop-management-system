import React from 'react';
// import {useNavigate} from 'react-router-dom';
import Navbar from './navbar';
import GreetTag from './welcome-tag';
import Display from './sales_display';

function Sales (){

    // const navigate = useNavigate()

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
                        <Display/>
                </div>
            </div>
        </div>
    )
}

export default Sales;