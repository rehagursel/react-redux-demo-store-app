import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { notification: {} },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        postStatus: action.payload.postStatus,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
