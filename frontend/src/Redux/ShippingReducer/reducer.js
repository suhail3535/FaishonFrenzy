import {
    DELETE_SUCCESS,
  GET_ADDRESS_SUCCESS,
  POST_ADDRESS_SUCCESS,
  POST_FAILURE,
  POST_REQUEST,
} from "./actiontype";

const initialState = {
  isLoading: false,
  address: [],

  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_REQUEST:
      return { ...state, isLoading: true };
    case POST_FAILURE:
      return { ...state, isError: true, isLoading: false };

    case POST_ADDRESS_SUCCESS:
      return { ...state, isLoading: false };

    case GET_ADDRESS_SUCCESS:
      return { ...state, isLoading: false, address: payload };
    case DELETE_SUCCESS:
      return { ...state, isLoading: false,isError:true };
    default:
      return state;
  }
};
