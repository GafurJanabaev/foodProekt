import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    info:[]
}

export const categoryInfo = createSlice({
    name:'InfoCategory',
    initialState,
    reducers:{
        fetchCategoryInfo:(state, action) =>{
            state.info = action.payload
        }
    }
})

export const {fetchCategoryInfo} = categoryInfo.actions
export default categoryInfo.reducer