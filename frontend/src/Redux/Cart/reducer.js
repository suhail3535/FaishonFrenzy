import {
  CART_DATA_ERROR,
  CART_DATA_LOADING,
  CART_DATA_POST,
  CART_DATA_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  cart: [],
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_DATA_LOADING:
      return { ...state, isLoading: true };
    case CART_DATA_SUCCESS:
      return { ...state, isLoading: false, cart: payload};
      case CART_DATA_POST:
        return { ...state, isLoading: false, cart: [...state.cart, payload] };
    case CART_DATA_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
