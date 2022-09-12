import React from "react";
import UserNav from "./UserNav";

export default function Header() {
  return (
    <div className="shadow">
      <div className="container flex justify-between items-center mx-auto">
        <div className="site-name text-yellow-300 text-2xl font-medium animate-bounce"></div>
        <UserNav />
      </div>
    </div>
  );
}
