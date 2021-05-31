import React from 'react';
import style from './FormControl.module.css';

export const Textarea = ({input,meta,...props}) => {
    let bool = meta.touched && meta.error;
    return (
        <>
            <textarea className = {bool && style.error} {...input}  {...props}/>
            <div>
                {bool && <span className = {style.error_message}>{meta.error}</span> }
            </div>
        </>
    )
}

export const Input = ({input,meta,...props}) => {
    let bool = meta.touched && meta.error;
    return (
        <>
            <input className = {bool && style.error} {...input}  {...props}/>
            <div>
                {bool && <span className = {style.error_message}>{meta.error}</span> }
            </div>
        </>
    )
}