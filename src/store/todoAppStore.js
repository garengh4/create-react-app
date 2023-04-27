import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "../reducers/todosReducer";
import {userReducer} from "../reducers/userReducer";

export let todoAppStore = configureStore({
    reducer:{
        userInfo: userReducer,
        todosInfo: todosReducer
    }
})