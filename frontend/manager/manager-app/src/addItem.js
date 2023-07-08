import React from "react";
import GreetTag from "./welcome-tag";


function AddItem (){
    return(
        <div className="add-item-base">
            <GreetTag  greeting="Add new Item"/>
        </div>
    );
}

export default AddItem;