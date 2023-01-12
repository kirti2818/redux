import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPost } from "../redux/post/post.action"

export const PostPage = ()=>{
    const dispatch = useDispatch()
    const post = useSelector((store)=>store.posts.post)
    console.log(post)
    useEffect(()=>{
       dispatch(getPost())
    },[])
    return(
        <div>
            <h1>POST PAGE</h1>
            {
                post.map((post)=>{
                    return(
                        <div key = {post.id}>
                            <li>{post.message}</li>
                        </div>
                    )
                })
            }
        </div>
    )
}