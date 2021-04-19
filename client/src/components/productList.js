
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const ProductList = (props) => {
    const [listProduct, setListProduct]= useState([]);
    
    const getListProduct = () =>{
        axios.get('http://localhost:8000/api/product')
        .then((res) =>{
            console.log(res.data);
            setListProduct(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            <hr/>
            <button onClick={getListProduct}>List Product </button>
            {  
               listProduct.map((product, index) => (
                <div key={index}>
                    <Link to= {`/product/${product._id}`} >
                    <h4> {product.title} </h4>
                    </Link>
                    </div>
               ) )
            }
           
        </div>
    )
}
export default ProductList;









// import  {useState, useEffect} from 'react';
// import axios from 'axios';
// import {navigate, Link} from '@reach/router';

// const productList = (props) => {
//     return (
//         <div>
           
//         </div>
//     )
// }
// export default productList;
