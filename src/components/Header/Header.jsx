import React from 'react'
import { NavLink } from 'react-router-dom';
import style from './Header.module.css'; 


function Header(props) {
    return (
        <header className = {style.header}>
    
            <img src = "http://iconutopia.com/wp-content/uploads/2016/06/space-dog-laika1.png" alt = "icon"/>
            <div className= {style.loginBlock}>
                {props.isAuth ? <div>Welcome  <button onClick = {props.logoutThunk}>Logout</button></div> 
                :<NavLink to = "/login">
                    Login
                </NavLink>
                }
            </div>
             
        </header> 
    )
}

export default Header
