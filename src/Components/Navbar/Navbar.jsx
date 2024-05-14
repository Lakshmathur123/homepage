import React from 'react'
import './Navbar.css'
import logo from '../../assests/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
       <img src={logo} alt="" className='logo'/>
       <ul>
       <li><button className='btn1'>Features</button></li>
       <li><button className='btn2'>Examples</button></li>
        <li>Pricing</li>
        <li>Demo</li>
        <li><button className='btn'>Blog</button></li>
       </ul>
    </nav>
  )
}

export default Navbar