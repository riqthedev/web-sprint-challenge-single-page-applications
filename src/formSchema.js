import * as yup from "yup";







const schema = yup.object().shape({
    name: 
    yup
    .string()
    .required("Name is required")
    .min(3,"name must be at least 2 characters"),
    
    
    size: 
    yup.string().oneOf(["Small", "Large","Medium", "Party"]).required("Please select a size"),
   
    sauce:
     yup.string().required("Please select a sauce"),

     special: 
     yup.string().trim()

})




export default schema
