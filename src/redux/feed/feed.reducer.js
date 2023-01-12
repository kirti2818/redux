import { GET_FEED } from "./feed.actiontypes";

const initialState = {
    feed : []
}
export const feedReducer = (state = initialState , action)=>{
    
    switch(action.type){
       
        case GET_FEED:{
            console.log(action.payload)
            return {
                ...state,feed : action.payload
            }
        }
       default:{
        return state;
       }
    }
}