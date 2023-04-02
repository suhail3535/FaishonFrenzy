import axios from "axios";
import { CLOTING_DATA_ERROR, CLOTING_DATA_LOADING, CLOTING_DATA_SUCCESS } from "./actionType";

export const getCloting = (param) => async (dispatch) => {
  try {
    dispatch({ type: CLOTING_DATA_LOADING });
    let res = await axios
      .get("https://sleepy-pear-toga.cyclic.app/cloths", param)
      .then((e) => {
        dispatch({ type: CLOTING_DATA_SUCCESS, payload: e.data });
        return e.data;
      });
    console.log(res);
  } catch (err) {
    dispatch({ type: CLOTING_DATA_ERROR }); 
  }
};


