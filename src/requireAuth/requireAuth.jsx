import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"

export const RequireAuth=({children})=>{
   const isAuth = useSelector((store)=>store.auths.isAuth)
   const navigate = useNavigate()
   if(isAuth){
    return children
   }else{
   return( <Navigate to = "/login" />)
   }
}