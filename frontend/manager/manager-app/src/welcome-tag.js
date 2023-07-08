import React from 'react';


function GreetTag (props){
    return(
        <div className='greeting'>
            <h2>{props.greeting}</h2>
        </div>
    );
}

export default GreetTag;