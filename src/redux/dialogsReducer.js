const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE = "UPDATE_MESSAGE";

let initialState = {
    messagesData : [
        {id:1,message : "How are you ?"},
        {id:2,message : "Do you wanna kesyou"},
        {id:3,message : "Create your app"}
    ],
    dialogData : [
        {id:1,name : "Sergey"},
        {id:2,name : "Katya"},
        {id:3,name : "Pitbuel"}
      ],
    newMessageText:"Holla"
}

const dialogsReducer = (state=initialState,action) => {
    switch(action.type){

        case ADD_MESSAGE:
            return {...state,
                    messagesData : [...state.messagesData,{id:5,message:action.message}]}
            
        default : return state;
    }
}
export const addNewMessageActionCreator = (message) => {
    return {type:ADD_MESSAGE,message};
}




export default dialogsReducer;