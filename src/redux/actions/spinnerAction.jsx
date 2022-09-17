import { SET_LOADING_OFF, SET_LOADING_ON } from "../constant/constant";

export const showLoading = () => {
  return {
    type: SET_LOADING_ON,
  };
};
export const hideLoading = () => {
  return {
    type: SET_LOADING_OFF,
  };
};
