import React from 'react'
import { Link } from 'react-router-dom'
import './Restaurant.css'
function Restaurant() {
  return (
    <div className='py-5 my-5'>
    <div className='container py-5'>
    <ul className='restaurant py-5'>
        <li><Link className='link' to='/Pizza'>Pizza</Link></li>
        <li><Link to='/Potato' className='link'>Potato</Link></li>
        <li><Link to='/Chickpea' className='link'>Chickpea</Link></li>
    </ul>
    </div>
    
   
    </div>
  )
}

export default Restaurant