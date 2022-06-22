import { uiActions } from "./ui-slice";
import { listActions } from "./list-slice";

export const fetchListData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        postStatus: "succeeded",
        message: "Fetching product list data!",
      })
    );
    const fetchData = async () => {
      const response = await fetch(
        "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/"
      );

      if (!response.ok) {
        throw new Error("Could not fetch products!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const listData = await fetchData();

      dispatch(
        listActions.replaceListItems({
          items: listData || [],
        })
      );
      dispatch(
        uiActions.showNotification({
          status: "succeeded",
          postStatus: "succeeded",
          message: "Product data fetched!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          postStatus: "succeeded",
          message: error.message,
        })
      );
    }
  };
};

export const fetchCategoriesData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        " https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/"
      );

      if (!response.ok) {
        throw new Error("Could not fetch categories!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const categoriesData = await fetchData();
      dispatch(
        listActions.replaceCategoriesList({
          categories: categoriesData || [],
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          postStatus: "succeeded",
          message: error.message,
        })
      );
    }
  };
};

export const fetchProductData = (productId) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        postStatus: "succeeded",
        message: "Fetching product data!",
      })
    );
    const fetchData = async () => {
      const response = await fetch(
        `https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${productId}`
      );

      if (!response.ok) {
        throw new Error("Could not fetch product!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const productData = await fetchData();
      dispatch(listActions.setProductDetails(productData));
      dispatch(
        uiActions.showNotification({
          status: "succeeded",
          postStatus: "succeeded",
          message: "Product data fetched!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          postStatus: "succeeded",
          message: error.message,
        })
      );
    }
  };
};

export const sendProductData = (newItem) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        postStatus: "pending",
        message: "Sending product data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products",
        {
          method: "POST",
          body: JSON.stringify({
            name: newItem.name,
            price: +newItem.price,
            category: newItem.category,
            description: newItem.description,
            avatar: newItem.avatar,
            developerEmail: "gurselreha@gmail.com",
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending product data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "succeeded",
          postStatus: "succeeded",
          message: "Sent product data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          postStatus: "error",
          message: error.message,
        })
      );
    }
  };
};
