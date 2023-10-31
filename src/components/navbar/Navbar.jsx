import React from 'react'
import './Navbar.css'
import Products from './../products/Products';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <Link><img src='img/icon.png' className='img-icon' alt='shop-icon' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto gap-3">
        <li className="nav-item ">
        <Link to="/" className='nav-link'>Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/Products" className='nav-link'>Products</Link>
        </li>
        <li className="nav-item">
          <Link to="/Restaurant" className='nav-link'>Restaurant</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}
export default Navbar