import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Outlet, Link } from "react-router-dom";
import { fetchProductData } from "../store/list-actions";

import HighlightedProduct from "../components/products/HighlightedProduct";
import ErrorMessage from "../components/UI/ErrorMessage";
import NoProductsFound from "../components/UI/NoProductsFound";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.list.productDetails);
  const notification = useSelector((state) => state.ui.notification);
  const params = useParams();

  const { productId } = params;

  useEffect(() => {
    dispatch(fetchProductData(productId));
  }, [productId, dispatch]);

  if (notification.status === "pending") {
    return (
      <div className="mx-auto mt-40 w-2/3 text-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (notification.status === "error") {
    return <ErrorMessage message={notification.message} />;
  }

  if (
    notification.status === "succeeded" &&
    (!productDetails || productDetails.length === 0)
  ) {
    return <NoProductsFound buttonType="cancel" />;
  }

  return (
    <Fragment>
      <HighlightedProduct
        name={productDetails.name}
        avatar={productDetails.avatar}
        description={productDetails.description}
        price={productDetails.price}
      />
      <Outlet />
      <Link
        to="/products"
        className="flex items-center justify-center pb-1.5 w-12 h-12 text-xl sm:text-3xl sm:w-14 sm:h-14 rounded-full bg-black text-white font-bold absolute bottom-[8%] right-[5%] sm:bottom-[10%] sm:right-[10%]"
      >
        x
      </Link>
    </Fragment>
  );
};

export default ProductDetail;
