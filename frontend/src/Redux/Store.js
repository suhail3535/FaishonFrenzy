import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";  
import {reducer as dressManager} from "./Dress/reducer"  


const rootReducer = combineReducers({  
    dressManager
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));