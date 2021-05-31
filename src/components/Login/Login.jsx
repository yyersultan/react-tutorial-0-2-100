import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { loginThunk } from '../../redux/auth-reducer'
import { maxLength, required } from '../../utils/validators/validators'
import { Input } from '../FormControls/FormControls'
import style  from '../FormControls/FormControl.module.css';

const maxLength12 = maxLength(30);

const LoginForm = (props) => {
    return (
            <form onSubmit = {props.handleSubmit}>
                <div>
                    <Field component = {Input} type = "email" validate = {[required,maxLength12]} name = {"email"} placeholder = "Login"/>
                </div>
                <div>
                    <Field component = {Input}  validate = {[required,maxLength12]} name = {"password"} placeholder = "password"/>
                </div>
                <div> remember Me
                    <Field component = {Input}   name = {"rememberMe"} type = "checkbox" /> 
                </div>

                {props.error &&
                <div className = {style.summaryError}>
                    {props.error}
                </div>
                }
                <div>
                    <button >Submit</button>
                </div>
            </form> 
    )
}

const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = formData => {
        props.loginThunk(formData.email,formData.password,formData.rememberMe);
    }
    if(props.isAuth) {
        return <Redirect to = "/profile"/>
    }
    return (
        <div>
            <h1>Login page</h1>
            <LoginReduxForm onSubmit = {onSubmit}/>
        </div>
    )
}

let mapStateToProps = state => {
    return {
        isAuth : state.auth.isAuth
    }
}

export default connect(mapStateToProps,{loginThunk})(Login);
