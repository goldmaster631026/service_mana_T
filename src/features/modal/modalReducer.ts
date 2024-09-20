import { createSlice } from "@reduxjs/toolkit";

const initialState: { open: boolean } = {
  open: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (action: { open: boolean }, payload) => {
      action.open = !action.open;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
