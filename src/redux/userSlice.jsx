import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

export const userSlice= createSlice({
    name:"Iuser",
    initialState:{
        user:""
    },
    reducers:{
        addUser:(state,{payload})=>{
            state.user = payload.apiData
        }
    }
})

export const {addUser} = userSlice.actions;
export const userReducer = userSlice.reducer;

export const userSelector = (state)=>state

