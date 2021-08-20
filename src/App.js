import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./Form";
import Home from "./Home"
import schema from "./formSchema";
import Order from "./Order";
import * as yup from "yup";


const newOrder = {
  name: "",
  size: "",
  sauce: "", // <--- Radio Buttons will have the same name
  topping:false,
  topping1: false,
  topping2: false,
  topping3: false,
  special: "",

  //Checkboxes(Toppings),


}

const newOrderErrors = {
  name: "",
  size: "",
  sauce: "",
  topping1: "",
  topping2: "",
  special: "",
}
const initialOrders = []
const initialDisabled = true





const App = () => {

const [orders, setOrders] = useState(initialOrders) // Completed Orders
const [formValues, setFormValues]= useState(newOrder) // How we update user input
const [formErrors, setFormErrors] = useState(newOrderErrors) // Set Form errors
const [disabled, setDisabled] = useState(initialDisabled) // State for submit button









  
const validate = (name, value) => {
  yup
    .reach(schema, name)
    .validate(value)
    .then(valid => {//eslint-disable-line
      setFormErrors({
        ...formErrors, [name]: ""
      });
    })
    .catch(err => {
      setFormErrors({
        ...formErrors, [name]: err.errors[0]
      });
    });
}

 


const change =(name, value) => { // Updating form with user input
setFormValues({
  ...formValues, [name]:value
})


}

const submit = () => { // Sending completed order to server
  const completedOrder = {
    name: formValues.name.trim(),
    size: formValues.size.trim(),
    sauce: formValues.sauce.trim(),
    topping: formValues.topping,
    topping1: formValues.topping1,
    topping2: formValues.topping2,
    topping2: formValues.topping3,
    special: formValues.special.trim()
  }

  finishedOrder(completedOrder)
   
}
 


const finishedOrder = order =>{
  axios.post("https://reqres.in/api/orders", order)
  .then(res => {
    setOrders([...orders, res.data])
    setFormValues(newOrder);
    console.log(orders)
  }).catch(err =>{
    console.log(err)
  })


 

 
  // Creating POST request
  

  }
  
    // setFormValues(newOrder)
  





  return (
  <div>
    <div>
      
        <Route path="/">
          <Home/>

        </Route>
      
    
      <Route path="/pizza">
      <Form
values={formValues}
submit={submit}
change={change}
disabled={disabled}
errors={formErrors}
/>
    {orders.map(order =>{
      return ( <Order key={order.id} details={order}/>)
    })}
      </Route>

    


    </div>
  </div>
  );
};
export default App;
