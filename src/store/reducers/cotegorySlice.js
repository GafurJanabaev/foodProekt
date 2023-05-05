import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loadingCotegories:false,
    categories:[]
}

export const categorySlice = createSlice({
    name:'categories',
    initialState,
    reducers:{
        fetchingCategories: state =>{
            state.loadingCotegories = true
        },
        fetchedCategories: (state, action) => {
            state.categories = action.payload
            state.loadingCotegories = false
        },
        fetchingErrorCategories: state => {
            loadingCotegories = false
        }
    }
})

// categorialiq logika tayin

export const { fetchedCategories, fetchingCategories, fetchingErrorCategories } = categorySlice.actions

export default categorySlice.reducer