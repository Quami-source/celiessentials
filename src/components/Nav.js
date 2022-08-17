import React from 'react'
import {NavLink} from 'react-router-dom'

function Nav() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className='navbar-brand'>
            <NavLink className="navbar-item" to="/">
                <img src={require('../assets/CeliLogo.png')} width="112" height="28"/>
            </NavLink>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>
        <div className='navbar-menu'>
            <div className='navbar-start'>
                <NavLink className="navbar-item" to="/">Home</NavLink>
                <NavLink className="navbar-item" to="/">Products</NavLink>
                <NavLink className="navbar-item" to="/">Blog</NavLink>
                <NavLink className="navbar-item" to="/">Contact</NavLink>
                <NavLink className="navbar-item" to="/">Home</NavLink>
            </div>
            <div className="navbar-end">
                <NavLink className="navbar-item" to="/">
                    Icon
                </NavLink>
                <NavLink className="navbar-item" to="/">
                    Icon
                </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Nav