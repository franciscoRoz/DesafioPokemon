import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
    name:'Theme',
    initialState:{
        WhiteTheme:true
    },reducers:{
        changeTheme:(state) => {
            state.WhiteTheme=!state.WhiteTheme
        }
    }                 
})

export const {changeTheme} = ThemeSlice.actions