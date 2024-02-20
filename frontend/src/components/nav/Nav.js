import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'

export default function Nav() {
  return (
    <nav className='container'>
        <div className='logo'>
            <Link to='/'><img src={Logo} style={{width:'110px',height:'70px'}}/></Link>
        </div>
        <ul>
            <li><Link to='/'>Book</Link></li>
        </ul>
    </nav>
  )
}
