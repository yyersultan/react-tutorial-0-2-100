import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux';
import {  setUserProfileThunk, setUserStatusThunk } from '../../redux/profileReducer';
import { withRouter } from 'react-router';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

const ProfileContainer = (props) => {
    let userId = props.match.params.userId;
    if(!userId){
        userId = '2';
    }
    React.useEffect(() => {
        props.setUserStatus(userId);
        props.setUserProfile(userId);
    },[]);  
    return (
        <Profile {...props} />
    )
}

let mapStateToProps = (state) => {
    return {
        userProfile : state.profilePage.userProfile,
        userStatus : state.profilePage.status
        
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile : (id) => {
            dispatch(setUserProfileThunk(id));
        },
        setUserStatus : (id) => {
            dispatch(setUserStatusThunk(id));
        }
    }
}
let authRedirect = withAuthRedirect(ProfileContainer)
let withUrlData = withRouter(authRedirect);

export default connect(mapStateToProps,mapDispatchToProps)(withUrlData)
