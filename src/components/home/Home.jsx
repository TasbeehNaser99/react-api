import React from 'react'
import './Home.css'
function Home() {
  return (
    <div className='home'>
    <div className='container py-3 '>
    <div className='row justify-content-center align-items-center py-5'>
        <div className='col-md-6'>
            <h1>Welcome to my store</h1>
        </div>
        <div className='col-md-6'>
            <img src='img/shop.avif' alt='shop'/>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Home