import { LOCAL_SERVICE } from "../../service/localService";
import USER_SERVICE from "../../service/userService";
import { SET_USER } from "../constant/action.const";

export const setUserLoginActionServ = (dataLogin, onSuccess, onFail) => {
  console.log(dataLogin);
  return (dispatch) => {
    USER_SERVICE.login(dataLogin)
      .then((res) => {
        dispatch(setUserLoginSuccess(res.data.content, onSuccess));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

const setUserLoginSuccess = (successValue, onSuccess) => {
  LOCAL_SERVICE.user.set(successValue);
  onSuccess();
  return { type: SET_USER, payload: successValue };
};
const setUserLoginFail = (onFail) => {
  onFail();
};
