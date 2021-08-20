import React from 'react';
import { Route, Link } from "react-router-dom";


export default function Home () {

    return(
        <div>
            <div>
                <h1>Lambda Eats</h1>
            <Link id="order-pizza" to="/pizza">Order Now</Link>
            </div>
        </div>
    )

}