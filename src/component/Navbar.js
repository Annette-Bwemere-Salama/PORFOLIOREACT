import React from 'react'
import {Link} from "react-router-dom"
import "../styles/navbar.css"
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Experience from '../pages/Experience'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='toggleButton'>
            <button></button>
        </div>
        <div className='links'>
            <Link to="/">{Home}</Link>
            <Link to='/project'>{Projects={Projects}}</Link>
            <Link to="/experience">{Experience}</Link>

        </div>
    </div>
  )
}

export default Navbar
