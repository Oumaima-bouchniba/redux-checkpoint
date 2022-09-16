import { ADD_TODO , CHECK_TODO, DONE_FILTER } from "./ActionTypes";

let NextId = 0 ;

export  const AddTodo = content => ({
    type : ADD_TODO,
    payload : {
        id : ++NextId,
        content
    }
});

export const CheckTodo = id => ({
    type : CHECK_TODO,
    payload: {
        id
    }
});


export const DoneFilter = filter => ({
    type : DONE_FILTER,
    payload : {filter}
});