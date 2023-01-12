import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { login } from "../redux/auth/auth.action"

export const LoginPage = ()=>{
    const isAuth = useSelector((store)=>store.auths.isAuth)
    const dispatch = useDispatch()
    const [formstate , setFormstate] = useState({})
    const navigate = useNavigate()
    const handleSubmit = (e)=>{
     e.preventDefault()
     dispatch(login(formstate))

    }
    
    const handleChange = (e)=>{
     const {name , value} = e.target
     setFormstate({
        ...formstate,
        [name] : value
     })
     
    }
    useEffect(()=>{
     if(isAuth){
        navigate("/")
     }
    },[isAuth])
    // console.log(formstate)
    return(
        <div>
            <h1>Login Page</h1>
            <form >
            <div>
                <input name = "email" onChange={handleChange} placeholder="Email" type = "email"/>
            </div>
            <div>
            <input name = "password" onChange={handleChange} placeholder="Password" type = "password"/>
            </div>

            <div>
             <input onClick = {handleSubmit} type="submit" value="login"  />
            </div>
            </form>
        </div>
    )
}