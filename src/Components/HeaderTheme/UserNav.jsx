import React from "react";
import { useSelector } from "react-redux";
export default function UserNav() {
  let userInfo = useSelector((state) => state.userReducer.userInfo);
  let renderUserInfo = () => {
    return (
      <>
        <div className="username text-lg text-red-500 mr-4">{userInfo}</div>
        <button className="logout">Đăng xuất</button>
      </>
    );
  };

  if (userInfo) renderUserInfo();

  return (
    <div>
      <button className="border border-black px-5 py-2 rounded-md">
        Đăng nhập
      </button>
      <button className="border border-black px-5 py-2 rounded-md">
        Đăng ký
      </button>
    </div>
  );
}
