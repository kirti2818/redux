import { Route, Routes } from "react-router-dom"
import { CareerPage } from "../pages/carrer"
import { FeedsPage } from "../pages/feed"
import { HomePage } from "../pages/home"
import { LoginPage } from "../pages/login"
import { PostPage } from "../pages/post"
import { RequireAuth } from "../requireAuth/requireAuth.jsx"

export const Routing = ()=>{
    return(
    <Routes>
        <Route path = "/" element = {<HomePage/>} />
        <Route path = "/login" element = {<LoginPage/>} />
        <Route path = "/feeds" element = {<RequireAuth><FeedsPage/></RequireAuth>} />
        <Route path = "/posts" element = {<RequireAuth><PostPage/></RequireAuth>} />
        <Route path = "/career" element = {<RequireAuth><CareerPage/></RequireAuth>} />
    </Routes>
    )
}