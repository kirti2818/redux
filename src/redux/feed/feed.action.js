import axios from "axios";
import { GET_FEED } from "./feed.actiontypes";

export const getFeed = ()=>async(dispatch)=>{
    let response = await axios.get("http://localhost:8083/feeds")
    let data = response.data
    return dispatch({type:GET_FEED, payload:data})
    // console.log(data)
}