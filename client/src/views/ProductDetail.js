import  {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const ProductDetail = (props) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + props.id)
        .then((res) => {
            console.log(res.data);
            setProduct(res.data);
        })
        .catch((err) =>{
            console.log(err);
        });
    }, []);
    return (
        <div>
           
           <h3> Title:  { product.title} </h3>
           <h2> Price:  { product.price} </h2>
           <h2> Discription:  { product.discription} </h2>
        </div>
    )
}
export default ProductDetail;