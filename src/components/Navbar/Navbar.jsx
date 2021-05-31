import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
function Navbar() {
    return (
        <nav className = {style.nav}>
        <div className = {style.item}> <NavLink to = '/profile'>Profile</NavLink></div>
        <div className = {style.item}> <NavLink to = '/dialogs'>Messages</NavLink></div>
        <div className = {style.item}> <NavLink to = '/users'>Users</NavLink></div>
        <div className = {style.item}> <a>Music </a></div>
        <div className = {style.item}> <a>Settings</a></div>
      </nav>
    )
}

export default Navbar
