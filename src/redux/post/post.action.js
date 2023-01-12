import axios from "axios"
import { GET_POST } from "./post.actiontypes"

export const getPost = ()=>async(dispatch)=>{
    let response = await axios.get("http://localhost:8083/posts")
    let data = response.data
    return dispatch({type:GET_POST,payload : data})
    console.log(data)
}