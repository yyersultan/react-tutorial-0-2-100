import { profileAPI } from "../api/api";

const ADD_POST = "ADD_POST"; 
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts : ["hello man", "Machine Learning", "can i help you ", "do you have a qustions ?"],
    userProfile : {},
    status : ""
}

const profileReducer = (state = initialState,action) => {
    let copyState ; 
    switch(action.type){

        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile : action.payload
            }

        case ADD_POST:
            copyState = {
                ...state,
                posts : [...state.posts,action.newPostText],
                
            }
            return copyState
        
        
        case SET_STATUS:
            return {
                ...state,
                status : action.status
            }
        
        default : return state;
    }
}

// ACTIONS RETURNS OBJECT OR MAP {}
const setUserProfileAC = (payload) => {
    return {type:SET_USER_PROFILE,payload}
}
export const  addPostActionCreator = (newPostText) => {
    return {type:ADD_POST,newPostText};
}
const setStatusAC = (status) => {
    return {type:SET_STATUS,status}
}


// THUNK 
export const setUserProfileThunk = (id) => (dispatch) => {
    profileAPI.getUserProfile(id).then(response => {
        dispatch(setUserProfileAC(response.data))
    });
}

export const setUserStatusThunk = (id) => dispatch => {
    profileAPI.getStatus(id).then(response => {
        debugger;
        dispatch(setStatusAC(response.data.status));
    })
}
export const updateUserStatusThunk = (status) => dispatch => {
    profileAPI.updateStatus(status).then(response => {
        debugger;
    });
}

export default profileReducer;