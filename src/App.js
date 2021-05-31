
import React from 'react';
import { Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import {  initializeApp } from './redux/app-reducer';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import Test from './components/Test/Test';
import UsersContainer from './components/Users/UsersContainer';
import Loader from './components/Loader/Loader';



function App(props) {
  
  
  React.useEffect(() => {
        props.initializeApp();
    },[])

  if(!props.initialized){
    return <Loader />
  }

  return ( 
    
    <div className = "app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className = "app-wrapper-content"> 
        <Route exact path = "/dialogs" render = {() => <DialogsContainer />}/>
        <Route exact path = "/profile/:userId?" render = {() => <ProfileContainer />}/>
        <Route exact path = "/users"   render = {() => <UsersContainer />} />
        <Route exact path = "/login"   render = {() => <Login />} />
        <Route exact path = "/test"    render = {() => <Test />} />
      </div>     
    </div>
  );
}
let mapStateToProps = state => {
  return {
    initialized : state.app.initialized
  }
}
export default  withRouter(connect(mapStateToProps,{initializeApp})(App));
