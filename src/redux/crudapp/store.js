import { configureStore } from "@reduxjs/toolkit";
import  userdetails  from "../slice/createslice";
export const store=configureStore({
    reducer:{
        app:userdetails,
    }
})