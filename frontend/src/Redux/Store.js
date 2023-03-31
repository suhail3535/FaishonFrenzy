import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";  
import {reducer as dressManager} from "./Dress/reducer"  
import { reducer as adminReducer } from "./Admin/reducer"
import{reducer as shippingReducer} from "./ShippingReducer/reducer"
import {reducer as cartReducer} from "./Cart/reducer"

const rootReducer = combineReducers({
  dressManager,
  adminReducer,
  shippingReducer,
  cartReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));