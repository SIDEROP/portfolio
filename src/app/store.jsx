import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

export let store = configureStore({
    reducer:{
        store:userSlice.reducer
    }
})