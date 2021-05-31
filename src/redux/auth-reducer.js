import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId:null,
    email:null,
    login:null,
    isAuth: false
}

const authReducer = (state = initialState,action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        
        default : return state;
    }
}

const setUserDataAc = (userId,email,login,isAuth) => {
    return {type:SET_USER_DATA,data : {userId,email,login,isAuth}}
}


export const authMeThunk = () => dispatch => {
    return authAPI.authMe().then(response => {
        let {userId,email,login} = response.data.data;
        if(response.data.resultCode === 0){
            dispatch(setUserDataAc(userId,email,login,true));
        }
    }) 
}
export const loginThunk = (email,password,rememberMe) => dispatch => {
    authAPI.login(email,password,rememberMe).then(response => {
        if(response.data.resultCode === 0){
            dispatch(authMeThunk());
        }else{
            dispatch(stopSubmit("login",{_error:"Email or password is incorrect !"}));
        }
    })
}
export const logoutThunk = () => dispatch => {
    authAPI.logout().then(response => {
        console.log(response);
        if(response.data.resultCode === 0){
            dispatch(setUserDataAc(null,null,null,false));
        }
    })
} 

export default authReducer;