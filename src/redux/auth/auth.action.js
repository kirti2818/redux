import axios from "axios"
import { LOGIN, LOGOUT } from "./auth.actionTypes"

export const login = (creds)=>async(dispatch)=>{
    let response = await axios.post("https://reqres.in/api/login",creds)
    let data = response.data
    return dispatch({type:LOGIN , payload : data.token})
    console.log(data.token)
}
export const logout =()=> ({type:LOGOUT})