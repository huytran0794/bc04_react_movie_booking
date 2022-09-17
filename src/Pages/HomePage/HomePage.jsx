import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ItemCard from "../../Components/ItemCard";
import { hideLoading, showLoading } from "../../redux/actions/spinnerAction";
import MOVIE_SERVICE from "../../service/movieService";
import TabsMovie from "./TabsMovie";
export default function HomePage() {
  const [movieList, setMovieList] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    MOVIE_SERVICE.getAllMovie("GP05")
      .then((res) => {
        setMovieList(res.data.content);
        dispatch(showLoading());
      })
      .catch((err) => {
        dispatch(hideLoading());
        console.error(`Error: ${err}`);
      });
  }, []);

  const renderMovieList = () => {
    return movieList.map((item, idx) => {
      return <ItemCard data={item} key={"#" + item.maPhim.toString() + idx} />;
    });
  };

  return (
    <div className="container">
      <div className="grid grid-cols-5 gap-10">{renderMovieList()}</div>
      <TabsMovie />
      {/* {renderSpinner()} */}
    </div>
  );
}
