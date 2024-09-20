import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
  username: "",
  email: "",
  id: "",
  token: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserState(action, payload: PayloadAction<UserState>) {},
  },
});

export const { setUserState } = userSlice.actions;
export default userSlice.reducer;
