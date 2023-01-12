import { useEffect } from "react"
import { getFeed } from "../redux/feed/feed.action"
import {useDispatch , useSelector} from "react-redux"

export const FeedsPage = ()=>{
    const dispatch = useDispatch()
    const feed = useSelector((store)=>store.feeds.feed)
    console.log(feed)
    useEffect(()=>{
    dispatch(getFeed())
    },[])
    return(
        <div>
            <h1>FEEDS PAGE</h1>
            {
                feed.map((feed)=>{
                    return (<div key = {feed.id}>
                        <li>{feed.message} </li>
                        

                    </div>)
                })
            }
        </div>
    )
}