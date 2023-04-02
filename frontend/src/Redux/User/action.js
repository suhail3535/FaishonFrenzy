import axios from "axios";
import {
  DELETE_SUCCESS,
  PATCH_SUCCESS,
  POST_FAILURE,
  POST_REQUEST,
  POST_SUCCESS,
  PRODUCT_DATA_ERROR,
  PRODUCT_DATA_LOADING,
  PRODUCT_DATA_SUCCESS,
} from "./actionType";


export const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DATA_LOADING });
    let res = await axios
      .get("https://sleepy-pear-toga.cyclic.app/users")
      .then((res) => {
        dispatch({ type: PRODUCT_DATA_SUCCESS, payload: res.data });
        return res.data;
      });
    console.log(res);
  } catch (err) {
    dispatch({ type: PRODUCT_DATA_ERROR });
  }
};




export const getpostRequest = () => {
  return { type: POST_REQUEST };
};

export const getpostFailure = () => {
  return { type: POST_FAILURE };
};
export const getpostSuccess = (payload) => {
  return { type: POST_SUCCESS, payload };
};

export const deldatasuccess = () => {
  return { type: DELETE_SUCCESS };
};


export const postRequest = (payload) => (dispatch) => {
  dispatch(getpostRequest());
  axios
    .post("https://sleepy-pear-toga.cyclic.app/users/register", payload)
    .then((res) => {
      console.log(res.data);
      dispatch(getpostSuccess(res.data));
    })
    .then((error) => {
      dispatch(getpostFailure());
    });
};


export const deletedata = (_id) => (dispatch) => {
  dispatch(getpostRequest());
  return axios
    .delete(`https://sleepy-pear-toga.cyclic.app/admin/delete/${_id}`)
    .then((res) => {
      // console.log(res.data);
      dispatch(deldatasuccess());
    })
    .catch((err) => {
      dispatch(getpostFailure());
    });

}


export const editProduct = (_id, newData) => (dispatch) => {
  dispatch(getpostRequest());
  axios
    .patch(`https://sleepy-pear-toga.cyclic.app/admin/update/${_id}`, newData)
    .then((res) => {
      console.log(res.data);
      dispatch({ type: PATCH_SUCCESS });
    })
    .catch((err) => {
      dispatch(getpostFailure());
    });
}