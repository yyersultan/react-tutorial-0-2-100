import React from 'react'
import { NavLink } from 'react-router-dom';

const UserItem = (props) => {
    const onFollowToggled = () => {
        props.user.followed ? props.onUnFollow(props.user.id):props.onFollow(props.user.id);
    }
    return (
        <div>
            <NavLink to = {`/profile/${props.user.id}`}>
                <img src="https://www.maupard.com/wp-content/uploads/2016/08/vincent-250x250.jpg" alt=""/>
            </NavLink>
            <div>{props.user.name}</div>
            <button disabled = {props.followingProgress.some(id => id === props.user.id)}
                    onClick = {onFollowToggled}>
            {props.user.followed ? "UnFollow":"Follow"}
            </button>
            <div> {props.user.status} </div>
        </div>
    )
}

export default UserItem
