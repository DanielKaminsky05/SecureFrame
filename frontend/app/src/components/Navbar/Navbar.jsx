import { useState } from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom'



function Navbar() {

  return (
    <>
    <div className='navbar'>
      <img src="/temp_logo.png" className="logo"></img>
      <div className="navbar-options">
        <div className="menu">
          <Link to="/upload" className="nav-link"> Encryptor </Link>
          <Link to="/decrypt" className="nav-link"> Decryptor </Link>
          <Link to="/contactUs" className="nav-link"> Contact Us</Link>
        </div>
        <div className="button-cont">
          <button>Log in</button>
          <button className="sign-up">Sign up</button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Navbar
