import { Fragment } from "react";
import { Link } from "react-router-dom";

import Catagories from "./Catagories";
import ProductItem from "./ProductItem";

const ProductList = (props) => {
  return (
    <Fragment>
      <Catagories />
      <div className="flex justify-center overflow-auto h-2/3 mx-auto">
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {props.list.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.name}
              price={product.price}
              avatar={product.avatar}
            />
          ))}
        </ul>
      </div>
      <Link
        to="/new-product"
        className="flex items-center justify-center pb-1.5 w-12 h-12 text-xl sm:text-3xl sm:w-14 sm:h-14 rounded-full bg-black text-white font-bold absolute bottom-[8%] right-[5%] sm:bottom-[10%] sm:right-[10%]"
      >
        +
      </Link>
    </Fragment>
  );
};

export default ProductList;
