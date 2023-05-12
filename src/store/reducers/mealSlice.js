import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    meals:[],
    loadingMeals: false,
}

export const mealsSlice = createSlice({
    name: 'meal',
    initialState,
    reducers:{
        fetchingMeals: state => {
            state.loadingMeals = true
        },
        fetchedMeals:(state, action) =>{
            state.meals = action.payload
            state.loadingMeals = false
        },
        fetchingErrorMeals: state => {
            state.loadingMeals = false
        },
    },
})

export const {fetchedMeals, fetchingErrorMeals, fetchingMeals} = mealsSlice.actions
export default mealsSlice.reducer