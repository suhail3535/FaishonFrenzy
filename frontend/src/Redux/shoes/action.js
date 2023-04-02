import axios from "axios";
import {
  SHOES_DATA_ERROR,
  SHOES_DATA_LOADING,
  SHOES_DATA_SUCCESS,
} from "./actionType";

export const getShoes = (param) => async (dispatch) => {
  try {
    dispatch({ type: SHOES_DATA_LOADING });
    let res = await axios
      .get("https://sleepy-pear-toga.cyclic.app/shoes", param)
      .then((e) => {
        dispatch({ type: SHOES_DATA_SUCCESS, payload: e.data });
        return e.data;
      });
    console.log(res);
  } catch (err) {
    dispatch({ type: SHOES_DATA_ERROR });
  }
};
