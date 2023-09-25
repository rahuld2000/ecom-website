import { createSlice } from "@reduxjs/toolkit";

const storeslice = createSlice({
    name:"cart",
    initialState:[],

    reducers:{
        addtocart(state,action){
            state.push(action.payload)
        },
        removefromcart(state,action){
          return state.filter((item)=> item.id !== action.payload.id)
        }
    },


});
export const {addtocart,removefromcart} = storeslice.actions;
export default storeslice.reducer;