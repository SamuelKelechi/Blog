import React from 'react'
import Logo from '../assets/logo.png'
import '../App.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header-Container'>
      <div className='Header-Container-Wrapper'>
        <img src={Logo} alt='Logo' className='Header-Logo'/>
        <div className='Header-Right-Container'>
          <Link to='/'>Home</Link>
          <Link to='/create'>Create Blog</Link>
        </div>
      </div>
    </div>
  )
}

export default Header