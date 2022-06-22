import React, { useState } from "react";
import { useDispatch } from "react-redux";

import DropdownMenu from "./DropdownMenu";
import { listActions } from "../../store/list-slice";

const Catagories = () => {
  const [category, setcategory] = useState("All Products");
  const dispatch = useDispatch();

  const changeSortHandler = (sortCategory) => {
    setcategory(sortCategory);
    dispatch(listActions.sortListItems(sortCategory));
  };
  return (
    <div className="flex justify-between my-16 mx-11 gap-4">
      <div className="w-80 rounded-md shadow-md px-4 py-2 bg-white text-sm font-medium text-gray-500">
        {category}
      </div>
      <DropdownMenu onSort={changeSortHandler} />
    </div>
  );
};

export default Catagories;
