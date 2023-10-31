import React, { useEffect, useState } from 'react'
import './Pizza.css'
function Pizza() {
    let [pizza,setPizza]=useState([]);
    const getPizza=async()=>{
     let response=await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
     let data=await response.json();
     setPizza(data.recipes);
     console.log(data.recipes);
    }
useEffect(()=>{
    getPizza();
},[])
  return (
    <div className='container'>
    <div className='row text-center'>
        <h1 className='py-5'>Pizza</h1>
     {
         pizza.map((ele)=>{
             return<div className='col-md-4 d-flex justify-content-center view' key={ele.id}>
                 <h2>{ele.title}</h2>
                 <img src={ele.image_url} className='w-50' alt='pizza'/>
                 </div>
         })
     }
     </div>
     </div>
  )
}

export default Pizza