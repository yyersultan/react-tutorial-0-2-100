import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_LOADER = "SET_LOADER";
const SET_FETCHING = "SET_FETCHING";

let initialState = {
    users: [],
    loader : false,
    followingProgress : []
}

const usersReducer = (state = initialState,action ) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users : state.users.map((obj) => {
                    if(obj.id === action.userId){
                        return {...obj,followed:true}
                    }
                    return obj;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users : state.users.map((obj) => {
                    if(obj.id === action.userId){ // if userid is founded then return changed obj else just return unchanged obj 
                        return {...obj,followed:false}
                    }
                    return obj;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users : action.payload,      
            }
        case SET_LOADER:
            return {
                ...state,
                loader : action.payload
            }
        case SET_FETCHING:
            return {
                ...state,
                followingProgress : action.isFethcing ? [...state.followingProgress,action.userId]:
                state.followingProgress.filter(id => id !== action.userId)
            }
        default : return state;
    }

}

export const onFollowAC = (userId) => {
    return { type:FOLLOW ,userId}
}
export const onUnfollowAC = (userId) => {
    return {type:UNFOLLOW,userId}
}
export const setUsersAC = (users) => {
    return {type:SET_USERS,payload : users}
}
export const setLoaderAC = (loading) => {
    return { type : SET_LOADER,payload:loading }
}
export const setFollowingProgressAc = (isFethcing,userId) => {
    return {type : SET_FETCHING,isFethcing,userId}
}

// thunks 

export const getUsersThunk = (id) => (dispatch) => {
    dispatch(setLoaderAC(true));
    usersAPI.getUsers(id).then(response => {
        dispatch(setLoaderAC(false));
        dispatch(setUsersAC(response.data.items));
        })
}

export const followThunk = (id) => dispatch => {
    dispatch(setFollowingProgressAc(true,id));
    usersAPI.followApi(id).then(response => {
        if(response.data.resultCode === 0){ 
            dispatch(onFollowAC(id));
        }
        dispatch(setFollowingProgressAc(false,id));
    })
}

export const unFollowThunk = (id) => dispatch => {
    dispatch(setFollowingProgressAc(true,id));
    usersAPI.unFollowApi(id).then(response => {
        if(response.data.resultCode === 0) {
            dispatch(onUnfollowAC(id));
        }
        dispatch(setFollowingProgressAc(false,id));
    })
}

export default usersReducer;