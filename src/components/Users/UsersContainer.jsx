import React from 'react';
import { connect } from 'react-redux';
import { followThunk, getUsersThunk, unFollowThunk,} from '../../redux/usersReducer';
import Loader from '../Loader/Loader';
import Users from './Users';

// THEY MUST RETURN OBJ {}

const UsersContainer = (props) => {
    const[currentPage,setCurrentPage] = React.useState(1);
    React.useEffect(() => {
        props.getUsersThunk(1);
    },[]);
    const onFollow = (id) => {
        props.follow(id);
    }
    const onUnFollow = (id) => {
        props.unfollow(id);        
    }
    const onPagination = (id) => {
        setCurrentPage(id);
        
    }
    return (
        <div>
            {props.loading ? <Loader /> : <Users {...props} onFollow = {onFollow}  
                                                onUnFollow = {onUnFollow} 
                                                currentPage = {currentPage}    
                                                onPagination = {onPagination} 
                                                followingProgress = {props.followingProgress}
                                                 />}
        </div>
    )
}



let mapStateToProps = (state) => {
    return {
        users:state.usersPage.users,
        loading:state.usersPage.loader,
        followingProgress : state.usersPage.followingProgress
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow : (userId) => {
            dispatch(followThunk(userId));
        },
        unfollow: (userId) => {
            dispatch(unFollowThunk(userId));
        },
        getUsersThunk:(id) => {
            dispatch(getUsersThunk(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer);