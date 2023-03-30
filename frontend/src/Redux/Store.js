import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";  
import {reducer as dressManager} from "./Dress/reducer"  
import{reducer as adminReducer} from "./Admin/reducer"

const rootReducer = combineReducers({
  dressManager,
  adminReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));