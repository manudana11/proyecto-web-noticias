import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <div className='header'>
        <img src={'https://cdn-icons-png.flaticon.com/512/11922/11922419.png'} alt="Logo" className='header-logo' /><p>News Central</p>
        <nav>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/listNews">News</Link></span>
            <span><Link to="/formNews">Send us a New</Link></span>
        </nav>
    </div>
  )
}

export default Header