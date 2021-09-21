import React from "react";
import { FaStar } from "react-icons/fa";
//import { top10 } from "../top10";


const Star = ({ selected }) => (
  <FaStar color={selected ? "red" : "grey"}/>
);

const createArray = (length) => [...Array(length)];

export default function StarRating(props) { //destructuring
    const rating = props.rating
    return (
      <>
        {createArray(5).map((n, i) => (
          <Star
            key={i}
            selected ={i < (Math.floor(rating / 2) - 1)} //Am I creating the star array correctly?
          />
        ))}
      </>
    );
  }