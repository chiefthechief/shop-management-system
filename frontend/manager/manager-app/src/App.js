import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Teller from './teller';
import Customer from './customers';
import Supplier from './suppliers';
import Inventory from './inventory';
import Delivery from './delivery';
import Sales from './sales';
import Login from './login'

function App(){
    return(
        <Router>
        <div className='app'>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/tellers' element={<Teller/>}/>
                <Route path='/customers' element={<Customer/>}/>
                <Route path='/suppliers' element={<Supplier/>}/>
                <Route path='/inventory' element={<Inventory/>}/>
                <Route path='/sales' element={<Sales/>}/>
                <Route path='/deliveries' element={<Delivery/>}/>
            </Routes>
            <div className='content-block'>
            </div>
        </div>
        </Router>
    );
}

export default App;