import React from "react";
import { Card } from "antd";
export default function ItemCard(props) {
  let { maPhim, hinhAnh, tenPhim } = props.data;
  let renderCard = () => (
    <Card
      id={maPhim}
      cover={
        <img
          alt="card-cover"
          src={hinhAnh}
          className="h-96 object-cover object-center"
        />
      }
      className="hover:-translate-y-1 duration-1000"
    >
      <div className="card-title text-red-300">{tenPhim}</div>
      <button className="w-full py-2 flex justify-center items-center duration-500 cursor-pointer capitalize text-white bg-indigo-300 hover:bg-indigo-600 hover:-translate-y-1">
        View Details
      </button>
    </Card>
  );
  return <div>{renderCard()}</div>;
}
