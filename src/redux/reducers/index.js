import { combineReducers } from "redux";
import appStateReducer from "./AppStateReducer";


const reducers = combineReducers({
    appState:appStateReducer
});

const rootReducer =(state,action)=>{
    return reducers(state,action)
}

export default rootReducer;