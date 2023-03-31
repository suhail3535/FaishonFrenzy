import {
  SHOES_DATA_ERROR,
  SHOES_DATA_LOADING,
  SHOES_DATA_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  shoes: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOES_DATA_LOADING:
      return { ...state, isLoading: true };
    case SHOES_DATA_SUCCESS:
      return { ...state, isLoading: false, shoes: payload };
    case SHOES_DATA_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
