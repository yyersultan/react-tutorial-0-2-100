import { authMeThunk } from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
    initialized : false
}

const appReducer = (state = initialState,action) => {
    switch(action.type){
        case SET_INITIALIZED:
            return {
                ...state,
                initialized : true
            }        
        default : return state;
    }
}

const initializedSuccess = () => {
    return {type : SET_INITIALIZED}
}

export const initializeApp = () => dispatch => {
    let promise = dispatch(authMeThunk());
    promise.then(() => {
        dispatch(initializedSuccess());
    })
    
}

export default appReducer;