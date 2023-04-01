import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";  
import {reducer as dressManager} from "./Dress/reducer"  
import { reducer as adminReducer } from "./Admin/reducer"
import{reducer as shippingReducer} from "./ShippingReducer/reducer"
import {reducer as cartReducer} from "./Cart/reducer" 
import {reducer as shoesReducer} from "./shoes/reducer" 
import {reducer as clotingReducer} from "./Cloting/reducer" 
  

const rootReducer = combineReducers({
  dressManager,
  adminReducer,
  shippingReducer,
  cartReducer, 
  shoesReducer, 
  clotingReducer  
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));