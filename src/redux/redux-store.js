import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer'
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import testReducer from "./testReducer";
import appReducer from "./app-reducer";

let reducers = combineReducers(
    {
        profilePage : profileReducer,
        dialogsPage : dialogsReducer,
        usersPage:usersReducer,
        auth : authReducer,
        testPage : testReducer,
        app : appReducer,
        form : formReducer
    }
);

let store = createStore(reducers,applyMiddleware(thunkMiddleWare));


export default store;