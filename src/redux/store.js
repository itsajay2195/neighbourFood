import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";


export default function configStore(initialState){
    const store = configureStore({reducer:rootReducer},initialState);
    return store;
}
