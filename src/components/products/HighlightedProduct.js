import React from "react";

const HighlightedProduct = (props) => {
  return (
    <div className="w-2/3 mx-auto h-3/4 overflow-auto">
      <div className="flex  pb-5 border-b-2 border-gray-500 mb-5">
        <div className="box-border flex items-center rounded-lg bg-white h-48 sm:h-36 w-48 sm:w-32 p-4">
          <img
            className="object-contain h-40 sm:h-24 w-44 sm:w-24"
            src={props.avatar}
            alt=""
          />
        </div>
        <div className="ml-5 flex flex-col justify-between">
          <h1 className="font-bold text-3xl">{props.name}</h1>
          <p className="">$ {props.price}</p>
        </div>
      </div>
      <h1 className="text-2xl">Description</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default HighlightedProduct;
