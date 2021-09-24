import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected }) => ( //pass in selected value
  <FaStar color={selected ? "red" : "grey"}/> //If true color star maroon, if false grey
);

const createArray = (length) => [...Array(length)];

export default function StarRating(props) { //destructuring
    const rating = props.rating;//assigning the passed in rating to a variable to use in the function
    return (
      <>
        {createArray(5).map((n, i) => ( //create the star array using map function
          <Star
            key={i}
            selected ={i < Math.floor(rating / 2) - 1} //Am I creating the star array correctly?
          />
        ))}
      </>
    );
  }