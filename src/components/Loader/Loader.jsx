import React from 'react'
import style from './Loader.module.css';

function Loader() {
    return (
        <div>
            <img className = {style.loader}  src="https://upload.wikimedia.org/wikipedia/commons/5/54/Ajux_loader.gif" alt=""/>
        </div>
    )
}

export default Loader
