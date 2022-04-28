import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavLogo.css'
import {Link} from "react-router-dom";

function NavLogo() {
  return (
    
<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid">
      <div className='margin'> <img src="https://cdn3.vectorstock.com/i/thumb-large/10/77/food-fox-logo-vector-24171077.jpg" alt="logo" width="70px"/></div>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="margin collapse navbar-collapse"  id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='' ><span  style={{color:"white",fontSize:25}}> Home</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='' ><span  style={{color:"white",fontSize:25}}>Menu</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='' ><span  style={{color:"white",fontSize:25}}>Cart</span></Link>
        </li>
        <div>
        <li className=" margin2 nav-item">
          <Link className="nav-link" to='' ><span  style={{color:"white",fontSize:25}}>Login</span></Link>
        </li>
 </div>
 <div>
        <li className="nav-item">
          <Link className="nav-link" to='' ><span  style={{color:"white",fontSize:25}}>Sign Up</span></Link>
        </li>
 </div>

      </ul>
    </div>
  </div>
</nav>

  )
}

export default NavLogo