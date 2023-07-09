import React from 'react';
//import { ReactDOM } from 'react';
import Navbar from './navbar';

function Teller (){
    const load_tellers = () =>{
        let teller = [
            {
                name:"Kofi Cudjoe",
                arriv_time: "12:00",
                dep_time: "13:00",
                sales: "$120.00"
            }
        ];
        return teller;
    }
    return(
        <div className='tellers'>
            <Navbar/>
            <div className='teller-content'>
                <div className='teller-header'>
                    <h1>TELLERS</h1>
                </div>
                <div className='teller-rep'>
                    {
                    load_tellers().map((item, index) =>
                    (
                        <div className='tabs'>
                            <h2>{item.name}</h2>
                            <p> Arrival time: {item.arriv_time}</p>
                            <p> Departure time: {item.dep_time}</p>
                            <p> Sales: {item.sales} </p>
                        </div>))
                    }
                </div>
            </div>
        </div>
    );
}

export default Teller;