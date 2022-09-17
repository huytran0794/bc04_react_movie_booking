import React from "react";
import { useSelector } from "react-redux";
import { HashLoader } from "react-spinners";

export default function Spinner() {
  let spinnerCondition = useSelector((state) => state.reducerSpinner.isLoading);
  return (
    spinnerCondition && (
      <div className="flex justify-center items-center h-screen w-screen fixed left-0 top-0 bg-slate-700 opacity-70 duration-1000 z-[1]">
        {/* <DotLoader color="#36d7b7" /> */}
        <HashLoader color="hsla(168, 67%, 53%, 1)" size={100} loading />
      </div>
    )
  );
}
