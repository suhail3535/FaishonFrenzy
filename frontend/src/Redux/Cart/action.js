import axios from "axios";
import { CART_DATA_ERROR, CART_DATA_LOADING, CART_DATA_POST, CART_DATA_SUCCESS } from "./actionType";

export const addToCart = (payload) => async (dispatch) => {
  try {
    dispatch({ type: CART_DATA_LOADING });
    let res = await axios
      .post(`http://localhost:7700/carts/add`, payload)
      .then((e) => {
        dispatch({ type: CART_DATA_POST , payload: e.data });
        return e.data;
      });
    console.log("fromRedux",res);
  } catch (err) {
    dispatch({ type: CART_DATA_ERROR });
  }
};

export const getCart = () => async (dispatch) => {
  try {
    dispatch({ type: CART_DATA_LOADING });
    let res = await axios
      .get(`http://localhost:7700/carts/`)
      .then((e) => {
        dispatch({ type: CART_DATA_SUCCESS, payload: e.data });
        return e.data;
      });
    console.log("fromRedux",res);
  } catch (err) {
    dispatch({ type: CART_DATA_ERROR });
  }
};