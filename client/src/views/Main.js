// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import ProductForm from '../components/productForm';
// const Main = () => {
//     const [ message, setMessage ] = useState("")
//     useEffect(()=>{
//         axios.get("http://localhost:8000/api")
//             .then(res=>setMessage(res.data.message))       
//     }, []);
//     return (
//         <div>
//             <ProductForm/>
           
//         </div>
//     )
// }
// export default Main;


import React from 'react';
import ProductList from './../components/productList';
import ProductForm from './../components/productForm';
const Main = () => {
    return (
        <div>
           <ProductForm  />
           <ProductList  />
        </div>
    )
}
export default Main;
