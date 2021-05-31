import React from 'react'
import { connect } from 'react-redux';
import { addNewMessageActionCreator, updateMessageTextActionCreator } from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

import Dialogs from './Dialogs';



let mapStateToProps = (state) => {
    return {
        dialogsPage : state.dialogsPage,
        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage2 : (message) => {      
            dispatch(addNewMessageActionCreator(message));
        },
       
    }
}
let AuthRedirect  = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirect);

export default DialogsContainer
