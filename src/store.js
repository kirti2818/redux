import {compose , combineReducers, applyMiddleware, legacy_createStore } from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./redux/auth/auth.reducer"
import { feedReducer } from "./redux/feed/feed.reducer"
import { postReducer } from "./redux/post/post.reducer"

const rootReducer = combineReducers({
    auths: authReducer,
    feeds : feedReducer,
    posts : postReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))