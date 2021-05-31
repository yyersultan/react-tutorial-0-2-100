import React from 'react';
import UserItem from "./UserItem";
import style from './User.module.css';


const Users = React.memo((props) => {
    
    const onPaginationBtnClick = (el) => {
        props.onPagination(el);
    }
    let pages_array = []
    for(let i =0;i < 5;i ++){ pages_array.push(i+1); }
   
    return (
        <div>
            
            <div>        
                <div>
                    {pages_array.map((el) => <button 
                                                className = {props.currentPage === el && style.currentPage}
                                                onClick = {() => onPaginationBtnClick(el)}>{el}</button> )}  
                </div>
                <div>
                    { props.users.map(user => <UserItem user = {user}
                                                        followingProgress = {props.followingProgress}
                                                        onUnFollow = {props.onUnFollow} 
                                                        onFollow = {props.onFollow}/>) }
                </div>
            </div> 
        </div>
        )
        
})

export default Users;