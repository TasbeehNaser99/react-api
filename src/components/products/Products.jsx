import React, { useEffect, useState } from 'react'
import './Products.css'
function Products() {
let [product,setProduct]=useState([]);
const getProduct=async()=>{
    let response=await fetch("https://fakestoreapi.com/products");
 let data =await response.json();
 setProduct(data);
} 
useEffect(()=>{
    getProduct();
},[])   
  return (
    <div className='container'>
   <div className='row text-center'>
    <h1 className='py-5'>Products</h1>
    {
        product.map((ele)=>{
            return<div className='col-md-4 d-flex justify-content-center view' key={ele.id}>
                <h2>{ele.title}</h2>
                <img src={ele.image} className='w-50'/>
                </div>
        })
    }
    </div>
    </div>
  )
}

export default Products