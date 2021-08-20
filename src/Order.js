import React from "react";


export default function Order (props){
const {values} = props;
    if (!values) {
        return <h3>Working on your Order...</h3>
    }

    return (
        <div>
            <h2>{values.name}</h2>
            <p>Size: {values.size}</p>
            <p>Sauce: {values.sauce}</p>
            <p>Topping: {values.topping}</p>
        </div>
        
    )
}