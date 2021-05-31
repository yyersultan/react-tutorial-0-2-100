import React from 'react'
import MyPostContainer from './MyPosts/MyPostContainer';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
function Profile(props) {
    return (
        <div className = {style.content}>
          <ProfileInfo {...props}/>
          <MyPostContainer  />
        </div>
    )
}

export default Profile
