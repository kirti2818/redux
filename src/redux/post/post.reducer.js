import { GET_POST } from "./post.actiontypes";

const initialState = {
    post : []
}
export const postReducer = (state = initialState , action)=>{
    switch(action.type){
        case GET_POST:{
            return{
                ...state , post : action.payload
            }
        }
       default:{
        return state;
       }
    }
}