import React from 'react'
import { Link } from 'react-router-dom'
import Pizza from './../pizza/Pizza'
import Chickpea from './../chickpea/Chickpea'
import Potato from './../potato/Potato'
import './Restaurant.css'
function Restaurant() {
  return (
    <div className='py-5 my-5'>
    <div className='container'>
   <h1 className='h1-restaurent'>My Restaurant</h1>
      <section className='Pizza'>
        <Pizza />
      </section>
      <section className='Potato'>
        <Potato />
      </section>
      <section className='Chickpea'>
        <Chickpea />
      </section>
    
  
    </div>
    
   
    </div>
  )
}

export default Restaurant