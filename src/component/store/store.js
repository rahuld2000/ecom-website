import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./slice"
const store = configureStore({

    reducer:{
        cart: sliceReducer,
        
        
    }
})
export default store;