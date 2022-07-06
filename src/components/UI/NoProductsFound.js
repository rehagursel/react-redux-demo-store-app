import React from  "react"

import Catagories from "../products/Catagories"
import { Link } from "react-router-dom";

const NoProductsFound = (props) => {
  return (
    <React.Fragment>
    <Catagories />
    <div className="mx-auto mt-40 w-2/3 text-center">
      <p>No Product found!</p>
      {props.buttonType === "cancel" ? (
        <Link
          to="/products"
          className="flex items-center justify-center w-12 h-12 text-xl sm:text-3xl sm:w-14 sm:h-14 rounded-full bg-black text-white font-bold mx-auto mt-20"
        >
          x
        </Link>
      ) : (
        <Link
          to="/new-product"
          className="flex items-center justify-center w-12 h-12 text-xl sm:text-3xl sm:w-14 sm:h-14 rounded-full bg-black text-white font-bold mx-auto mt-20"
        >
          +
        </Link>
      )}
    </div>
    </React.Fragment>
  );
};

export default NoProductsFound;
