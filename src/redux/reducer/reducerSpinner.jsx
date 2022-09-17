import { SET_LOADING_ON, SET_LOADING_OFF } from "../constant/constant";
const initialState = {
  isLoading: false,
};

export let reducerSpinner = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING_ON:
      return { ...state, isLoading: true };
    case SET_LOADING_OFF:
      return { ...state, isLoading: false };

    default:
      return state;
  }
};
