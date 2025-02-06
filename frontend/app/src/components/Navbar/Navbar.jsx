import { useState } from 'react'
import './Navbar.css';



function Navbar() {

  return (
    <>
    <div className='navbar'>
      <img src="/temp_logo.png" className="logo"></img>
      <div className="navbar-options">
        <div className="menu">
          <button> Encryptor </button>
          <button> Decryptor </button>
          <button> Contact Us</button>
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
