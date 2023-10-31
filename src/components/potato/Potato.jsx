import React, { useState } from 'react'
import './Potato.css'
function Potato() {
    let [potato,setPotato]=useState([]);
    const getPotato= async()=>{
        let response=await fetch("https://forkify-api.herokuapp.com/api/search?q=potato");
        let data= await response.json();
        setPotato(data.recipes);
        console.log(data.recipes);
    }
    useState(()=>{
        getPotato();
    },[])
  return (
<div className='container'>
   <div className='row  text-center'>
    <h1 className='py-5'>Potato</h1>
    {
        potato.map((ele)=>{
            return <div className='col-md-4 d-flex justify-content-center view' key={ele.id}>
                <h2>{ele.title}</h2>
                <img src={ele.image_url} className='w-50' alt='potato'/>
            </div>
        }
        )
    }
    </div>
    </div>
  )
}

export default Potato