import { LOCAL_SERVICE } from "../../service/localService";
import { SET_USER } from "../constant/action.const";

const initialState = {
  userInfo: LOCAL_SERVICE.user.get(),
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      state.userInfo = payload;
      return { ...state };

    default:
      return state;
  }
};
