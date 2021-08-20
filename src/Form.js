import React from 'react';
import { Route } from 'react-router-dom';
import schema from './formSchema';
import * as yup from "yup";


export default function Form (props){

 
    
 

    const {values, change, submit, errors, disabled} = props


    const onSubmit =(event) => {
        event.preventDefault();
        submit();
    }

    const onChange = (event) => {
        const {name, value,} = event.target;
        
        change(name, value)
    }


    return (

        <form id="pizza-form" onSubmit={onSubmit}> 
        <div className="form-container">
            



            <label>
                Name:
                <input id="name-input" name="name" type="text" onChange={onChange} values={values.name}/>
            </label>

            <label>
                Size:
                {/* <input name="size" type="text" onChange={onChange} values={values.size}/> */}
                <select id="size-dropdown" onChange={onChange}>
                    <option value="">--Select A Size--</option>
                    <option value="1">Small</option>
                    <option value="2">Medium</option>
                    <option value="3">Large</option>
                    <option value="4">Party</option>
                </select>
            </label>

            <label>
                Sauce:
                <input name="sauce"  type="radio" value="Tomato" onChange={onChange} checked={values.sauce === "Tomato"}/>
                <input name="sauce"  type="radio" value="Pesto" onChange={onChange} checked={values.sauce === "Pesto"}/>
                <input name="sauce"  type="radio" value="BBQ" onChange={onChange} checked={values.sauce === "BBQ"}/>
                <input name="sauce"  type="radio" value="Ranch" onChange={onChange} checked={values.sauce === "Ranch"}/>
                 
            
               
            </label>

            <label>
                Topping:
                <input name="topping"  type="checkbox" value="Olives" onChange={onChange}  />
                <input name="topping1"  type="checkbox" value="Sausage" onChange={onChange}  />
                <input name="topping2"  type="checkbox" value="Chicken" onChange={onChange} />
                <input name="topping3"  type="checkbox" value="Bacon" onChange={onChange}  />
                
            </label>


            <label>
                Special Instructions:
                <input id="special-text" name="special" type="text" onChange={onChange} values={values.special}/>
            </label>

            <button  id="order-button" >Add to Order</button>



        </div>

        </form>

       
       
    )
}