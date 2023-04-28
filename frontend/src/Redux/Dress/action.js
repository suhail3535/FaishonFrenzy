import axios from "axios";
import { DRESS_DATA_ERROR, DRESS_DATA_LOADING, DRESS_DATA_SUCCESS } from "./actionType";

export const getDress = (param) => async (dispatch) => {
  try {
    dispatch({ type: DRESS_DATA_LOADING });
    let res = await axios
      .get("https://sleepy-pear-toga.cyclic.app/dress", param)
      .then((e) => {
        dispatch({ type: DRESS_DATA_SUCCESS, payload: e.data });
        return e.data;
      });
    console.log(res);
  } catch (err) {
    dispatch({ type: DRESS_DATA_ERROR });
  }
};