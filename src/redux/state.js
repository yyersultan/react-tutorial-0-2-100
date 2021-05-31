import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


let store = {
     _state : {
        profilePage : {
            posts : ["hello man", "Machine Learning", "can i help you ", "do you have a qustions ?"],
            newPostText : "Enter your text",
        }
        ,
        dialogsPage : {
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber(){},
   
   
    subscribe (func)  {
        this._callSubscriber = func;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage,action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._callSubscriber(this._state);
    }
}



export default store;