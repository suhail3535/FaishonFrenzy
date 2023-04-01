import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";  
import {reducer as dressManager} from "./Dress/reducer"  
import { reducer as adminReducer } from "./Admin/reducer"
import{reducer as shippingReducer} from "./ShippingReducer/reducer"
import {reducer as cartReducer} from "./Cart/reducer" 
import {reducer as shoesReducer} from "./shoes/reducer" 
import {reducer as userReducer} from "./User/reducer" 

const rootReducer = combineReducers({
  dressManager,
  adminReducer,
  shippingReducer,
  cartReducer,
  shoesReducer,
  userReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));