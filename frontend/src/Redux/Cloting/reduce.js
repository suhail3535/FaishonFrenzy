import {
  CLOTING_DATA_ERROR,
  CLOTING_DATA_LOADING,
  CLOTING_DATA_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  cloths: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CLOTING_DATA_LOADING:
      return { ...state, isLoading: true };
    case CLOTING_DATA_SUCCESS:
      return { ...state, isLoading: false, cloths: payload };
    case CLOTING_DATA_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
