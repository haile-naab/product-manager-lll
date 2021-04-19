import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(""); 
    const [discription, setDiscription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            discription   
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler} >
            <p>
                <label>Title</label>
                <input type="text" onChange = {(e)=>setTitle(e.target.value)}/> 
            </p> <br/>
            <p>
                <label>Price</label>
                <input type="text" onChange = {(e)=>setPrice(e.target.value)}/> 
            </p> <br/>
            <p>
                <label>Discription</label>
                <input type="text" onChange = {(e)=>setDiscription(e.target.value)}/> 
            </p> <br/>

            <input type="submit"/>
        </form>
    )
}
export default ProductForm;
