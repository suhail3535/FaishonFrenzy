import axios from "axios";
import { POST_FAILURE } from "../AdminReducer/actiontype";
import {
  DELETE_SUCCESS,
  GET_ADDRESS_SUCCESS,
  PATCH_SUCCESS,
  POST_ADDRESS_SUCCESS,
  POST_REQUEST,
} from "./actiontype";

export const getpostRequest = () => {
  return { type: POST_REQUEST };
};

export const getpostFailure = () => {
  return { type: POST_FAILURE };
};

export const getpostSuccessAddress = (payload) => {
  return { type: POST_ADDRESS_SUCCESS };
};
export const getdataSuccessAddress = (payload) => {
  return { type: GET_ADDRESS_SUCCESS, payload };
};

export const deldatasuccess = () => {
  return { type: DELETE_SUCCESS };
};
export const postRequestAddress = (payload) => (dispatch) => {
  dispatch(getpostRequest());
  axios
    .post("http://localhost:7700/address", payload)
    .then((res) => {
      console.log("post", res.data);
      dispatch(getpostSuccessAddress(res.data));
    })
    .then((error) => {
      dispatch(getpostFailure());
    });
};

export const getRequestAddress = () => (dispatch) => {
  dispatch(getpostRequest());
  axios
    .get("http://localhost:7700/address")
    .then((res) => {
      //   console.log("get",res.data);
      dispatch(getdataSuccessAddress(res.data));
    })
    .then((error) => {
      dispatch(getpostFailure());
    });
};

export const deletedataAdd = (id) => (dispatch) => {
  dispatch(getpostRequest());
  return axios
    .delete(`http://localhost:7700/address/${id}`)
    .then((res) => {
      console.log(res.data);
      dispatch(deldatasuccess());
    })
    .catch((err) => {
      dispatch(getpostFailure());
    });
};
