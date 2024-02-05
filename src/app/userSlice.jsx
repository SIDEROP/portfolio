import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

// get api
let profileApi = createAsyncThunk("profileApi", async (data,{rejectWithValue})=>{
    let res = await fetch('https://api.github.com/users/siderop')  
    // import.meta.env.VITE_API_USER_DATA || 
    try {
        let newRes = await res.json()
        return newRes
    } catch (error) {
        return rejectWithValue(error)
    }
})



export let userSlice = createSlice({
    name:"userSlice",
    initialState:{
        user:[],
        loading:false,
        error:null
    },
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(profileApi.pending,(state,action)=>{
            state.loading= true
        })
        .addCase(profileApi.fulfilled,(state,action)=>{
            state.loading= false
            state.user = action.payload
        })
        .addCase(profileApi.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default profileApi