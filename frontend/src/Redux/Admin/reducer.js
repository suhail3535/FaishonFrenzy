import { PRODUCT_DATA_ERROR, PRODUCT_DATA_LOADING, PRODUCT_DATA_SUCCESS } from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  product: [],

};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_DATA_LOADING:
      return { ...state, isLoading: true };
    case PRODUCT_DATA_SUCCESS:
       return {
         ...state,
         isLoading: false,
           product: payload
          // product: [payload, ...state.product],
       };

    case PRODUCT_DATA_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
