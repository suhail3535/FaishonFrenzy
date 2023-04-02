import axios from "axios";
import {
  CART_DATA_ERROR,
  CART_DATA_LOADING,
  CART_DATA_POST,
  CART_DATA_SUCCESS,
} from "./actionType";

export const addToCart = (payload) => async (dispatch) => {
  try {
    dispatch({ type: CART_DATA_LOADING });
    console.log("reduxPayload", payload);
    let res = await axios.post(
      `https://sleepy-pear-toga.cyclic.app/carts/add`,
      payload
    );
    dispatch({ type: CART_DATA_POST, payload: res.data });

    // console.log("fromRedux",res.data);
  } catch (err) {
    dispatch({ type: CART_DATA_ERROR });
  }
};

export const getAllCart = () => async (dispatch) => {
  try {
    dispatch({ type: CART_DATA_LOADING });
    let res = await axios
      .get(`https://sleepy-pear-toga.cyclic.app/carts/`)
      .then((e) => {
        dispatch({ type: CART_DATA_SUCCESS, payload: e.data });
        return e.data;
      });
    console.log("fromRedux", res);
  } catch (err) {
    dispatch({ type: CART_DATA_ERROR });
  }
};
