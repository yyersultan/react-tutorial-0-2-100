import React from 'react'
import style from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus';

function ProfileInfo(props) {
  
    return (
        <div>
          <div>
            <img className = {style.big_img} src = "https://otakukart.com/wp-content/uploads/2020/12/Boruto-Naruto-Next-Generations-Chapter-54-Release-Date-and-Details.jpg"/>
          </div>
          <div>
            {props.userProfile.fullName}
          </div>
          <div>
            <ProfileStatus status = {props.userStatus}/>
          </div>
        </div>
    )
}

export default ProfileInfo
