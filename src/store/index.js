import { configureStore } from "@reduxjs/toolkit";

import listSlice from "./list-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { list: listSlice.reducer, ui: uiSlice.reducer },
});

export default store;
