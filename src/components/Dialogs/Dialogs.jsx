import React from 'react'
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../utils/validators/validators';
import { Textarea } from '../FormControls/FormControls';
import DialogItem from './DialogItem/DialogItem';

import style from './Dialogs.module.css';
import Messages from './Messages/Messages';



const maxLength30 = maxLength(30);

const DialogsForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <Field component= {Textarea} name = "message" validate = {[required,maxLength30]} placeholder = "enter message"/>
            <button >SEND</button>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form:"dialogs"})(DialogsForm);

function Dialogs({dialogsPage,addNewMessage2,isAuth}) {
  
    if(!isAuth){
        return <Redirect to = "/login"/>
    }
    const onMessageSubmit = (messageData) => {
        
        addNewMessage2(messageData.message);
    }
    return (
        <div className = {style.dialogs}>
            <div className ="dialogs-item">
                {dialogsPage.dialogData.map(obj => <DialogItem name = {obj.name} id = {obj.id} />)}
            </div>
            <div className = {style.messages}>
                {dialogsPage.messagesData.map(obj => <Messages message = {obj.message}/>)}
            </div>
            <div>
                <DialogsReduxForm onSubmit = {onMessageSubmit} />
            </div>
        </div>
    )
}

export default Dialogs
