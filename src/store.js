import { configureStore } from "@reduxjs/toolkit";
import cartSystem from "./redux/cartSystem";

const store = configureStore({
    reducer:{
        user:cartSystem
    }
})
export default store;
