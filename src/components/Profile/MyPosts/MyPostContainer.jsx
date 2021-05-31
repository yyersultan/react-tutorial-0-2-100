
import React from 'react'
import { connect } from 'react-redux';
import {addPostActionCreator,updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

// const MyPostContainer = ({posts,newPostText,dispatch}) => {
  
//   const addPost = () => {
//     dispatch(addPostActionCreator());
    
//   }
//   const onPostChange = (text) => {
//     dispatch(updateNewPostTextActionCreator(text));
//   } 
//     return (
//         <MyPosts
//             posts = {posts}
//             newPostText = {newPostText}
//             updateNewPostText = {onPostChange} addNewPost = {addPost} />
//     )
// }

let mapStateToProps = (state) => {
  return {
    posts : state.profilePage.posts,
    newPostText : state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    
    addNewPost : (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    }
  }
}

const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostContainer
