import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'
import ProductComponent from './ProductComponent';
import {setProducts} from '../redux/actions/productAction'
import { useDispatch } from 'react-redux';
const ProductList =()=>{
    const products = useSelector((state)=>state);
    const dispatch = useDispatch();


    const fetchProducts = async ()=>{
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err)=>{
                console.log("Err", err);
            })
            dispatch(setProducts(response.data));
    }
    useEffect(()=>{
        fetchProducts()
    },[])
    console.log("Products: ", products);
    return(
        <div className='ui grid container' style={{marginTop: 20}}>
            <ProductComponent />
        </div>
    )
}
export default ProductList