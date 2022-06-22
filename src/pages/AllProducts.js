import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductList from "../components/products/ProductList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoProductsFound from "../components/UI/NoProductsFound";
import ErrorMessage from "../components/UI/ErrorMessage";
import { fetchListData, fetchCategoriesData } from "../store/list-actions";
import { listActions } from "../store/list-slice";

let isInitial = true;

const AllProducts = () => {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.list.sortedList);
  const isNewAdded = useSelector((state) => state.list.isNewAdded);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (!isInitial) {
      return;
    }
    dispatch(fetchListData());
    dispatch(fetchCategoriesData());
    isInitial = false;
  }, [dispatch]);

  useEffect(() => {
    if (!isNewAdded) {
      return;
    }
    dispatch(fetchListData());
    dispatch(fetchCategoriesData());
    dispatch(listActions.setIsNewAdded(false));
  }, [isNewAdded, dispatch]);

  if (notification.status === "pending") {
    return (
      <div className="mx-auto mt-40 w-2/3 text-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (notification.status === "error" || notification.postStatus === "error") {
    return <ErrorMessage message={notification.message} />;
  }

  if (notification.status === "succeeded" && (!list || list.length === 0)) {
    return <NoProductsFound buttonType="add" />;
  }

  const renderList = [...list];

  return <ProductList list={renderList} />;
};

export default AllProducts;
