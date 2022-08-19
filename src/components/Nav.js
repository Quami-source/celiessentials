import React from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,faUser } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className='navbar-brand'>
            <NavLink className="navbar-item" to="/">
                <img src={require('../assets/CeliLogo.png')} style={{width:'100%',height:'auto'}}/>
                <span className='brand-name'>celiessentials</span>
            </NavLink>

            <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </a>
        </div>
        <div className='navbar-menu'>
            
            <div className='links-container'>
                <div className='links'>
                    <NavLink className="navbar-item" to="/">Home</NavLink>
                    <NavLink className="navbar-item" to="/">Products</NavLink>
                    <NavLink className="navbar-item" to="/">Blog</NavLink>
                    <NavLink className="navbar-item" to="/">Contact</NavLink>
                    
                </div>
                <div className='icons'>
                    <NavLink className="navbar-item" to="/">
                        <FontAwesomeIcon icon={faUser} />
                    </NavLink>
                    <NavLink className="navbar-item" to="/">
                        <FontAwesomeIcon icon={faCartShopping}/>
                    </NavLink>
                </div>
            </div>
        </div>
        
    </nav>
  )
}

export default Nav