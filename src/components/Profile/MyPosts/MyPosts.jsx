import React from 'react'
import { Field, reduxForm } from 'redux-form'
import style from './MyPosts.module.css'
import Post from './Post/Post'
import {maxLength, required} from '../../../utils/validators/validators';
import { Textarea } from '../../FormControls/FormControls';
const maxLength10 =  maxLength(10);
const AddNewPostForm = props => {
  return (
    <form onSubmit = {props.handleSubmit}>
      <Field component = {Textarea} name = "newPostText" placeholder = "Enter post" validate = {[required,maxLength10]}/> 
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddnewPostReduxForm = reduxForm({form:'newPost'})(AddNewPostForm);

function MyPosts({posts,addNewPost,}) {
  console.log("my post rendered !!");
    const onAddnewPostSubmited = newPostText => {
      addNewPost(newPostText.newPostText);
    }

    return (
        <div>
            <h5> My  post </h5> 
          <div>
            <AddnewPostReduxForm onSubmit = {onAddnewPostSubmited}/>
          </div>
          <div className = {style.posts}>
            {posts.map((obj,index) => <Post text = {obj} key = {`${obj}__obj`}/>)}
          </div>
            
        </div>
    )
}

export default MyPosts
