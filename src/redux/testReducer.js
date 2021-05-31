

let initialState = {
    questions : [
        {id:1,question:"What is the ggg",vars:["genady","hhhh","hello man"],correct:"genady"},
        {id:2,question:"What is the const",vars:["constant","js value","jj"],correct : "contant"},
        {id:2,question:"What is the py",vars:["python","spyder","jer"],correct : "python"},
    ]
}

const testReducer = (state = initialState,action) => {
    return state;
}

export default testReducer;