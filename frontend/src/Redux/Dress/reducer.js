import {
  DRESS_DATA_ERROR,
  DRESS_DATA_LOADING,
  DRESS_DATA_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  dress: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DRESS_DATA_LOADING:
      return { ...state, isLoading: true };
    case DRESS_DATA_SUCCESS:
      return { ...state, isLoading: false, dress: payload };
    case DRESS_DATA_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
