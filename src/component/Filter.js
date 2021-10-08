import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { filterMovie, reset } from "../redux/movieSlice";

const Filter = () => {
  const [text, setText] = useState("");
  const [rate, setRate] = useState("");
  const [filter, setfilter] = useState({
    text: "",
    rate: "",
  });
  const dispatch = useDispatch();
  return (
    <div className="filter">
      <input
        type="text"
        onChange={(e) => {
          setfilter({ ...filter, text: e.target.value });
          dispatch(filterMovie({ filter: filter }));
        }}
      />
      <ReactStars
        count={5}
        onChange={(newrating) => {
          setfilter({ ...filter, rate: newrating });
          dispatch(filterMovie({ filter: filter }));
        }}
        size={45}
      />
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
};

export default Filter;
