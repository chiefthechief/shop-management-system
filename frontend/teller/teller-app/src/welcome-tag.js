import React from 'react';
import './login.css'


function GreetTag (props){
    return(
        <div className='greeting'>
            <h2>{props.greeting}</h2>
        </div>
    );
}

export default GreetTag;