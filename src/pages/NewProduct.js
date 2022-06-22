import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import NewHotelForm from "../components/products/NewProductForm";
import { listActions } from "../store/list-slice";
import { sendProductData } from "../store/list-actions";

const NewProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadProductHandler = (newProductData) => {
    dispatch(sendProductData(newProductData));
    navigate("/products");
    dispatch(listActions.setIsNewAdded(true));
  };

  return (
    <React.Fragment>
      <NewHotelForm onAddProduct={loadProductHandler} />
      <Link
        to="/products"
        className="flex items-center justify-center pb-1.5 w-12 h-12 text-xl sm:text-3xl sm:w-14 sm:h-14 rounded-full bg-black text-white font-bold absolute bottom-[8%] right-[5%] sm:bottom-[10%] sm:right-[10%]"
      >
        x
      </Link>
    </React.Fragment>
  );
};

export default NewProduct;
