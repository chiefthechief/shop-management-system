import React from 'react';
import './login.css'


function GreetTag (props){
    return(
        <div className='greeting'>
            <h2>Welcome </h2>
            <h3>{props.name}</h3>
        </div>
    );
}

export default GreetTag;