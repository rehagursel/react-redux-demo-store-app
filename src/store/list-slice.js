import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: {
    items: [],
    sortedList: [],
    categories: [],
    isNewAdded: false,
    productDetails: "",
  },
  reducers: {
    replaceListItems(state, action) {
      state.items = action.payload.items;
      state.sortedList = action.payload.items;
    },
    setProductDetails(state, action) {
      state.productDetails = action.payload;
    },
    setIsNewAdded(state, action) {
      state.isNewAdded = action.payload;
    },
    replaceCategoriesList(state, action) {
      state.categories = action.payload.categories;
    },
    sortListItems(state, action) {
      if (action.payload === "All Products") {
        state.sortedList = [...state.items];
      } else {
        const category = action.payload;
        const sortedItemsList = state.items.filter(
          (product) => product.category === category
        );
        state.sortedList = sortedItemsList;
      }
    },
  },
});

export const listActions = listSlice.actions;

export default listSlice;
