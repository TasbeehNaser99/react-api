import React, { useEffect, useState } from 'react'
import './Chickpea.css'
function Chickpea() {
    let [chickpea,setChickpea]=useState([]);
    const getChickpea=async()=>{
     let response=await fetch("https://forkify-api.herokuapp.com/api/search?q=chickpea");
     let data=await response.json();
     setChickpea(data.recipes);
     console.log(data.recipes);
    }
useEffect(()=>{
    getChickpea();
},[])
  return (
    <div className='container'>
    <div className='row text-center'>
        <h1 className='py-5'>Chickpea</h1>
     {
         chickpea.map((ele)=>{
             return<div className='col-md-4 d-flex justify-content-center view' key={ele.id}>
                 <h2>{ele.title}</h2>
                 <img src={ele.image_url} className='w-50' alt='Chickpea'/>
                 </div>
         })
     }
     </div>
     </div>
  )
}


export default Chickpea
