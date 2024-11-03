import { createSlice } from "@reduxjs/toolkit";

export const userSliceInitialState = {
  name: "Jhon Doe",
  age: 40,
  mail: "jhondoe@mail.com"
};

export const userSlice = createSlice({
  name: "user-slice",
  initialState: userSliceInitialState,
  reducers: {
    setUserName: (state, action) => {
      state.name = action.payload
    },
    setUserAge: (state, action) => {
      state.age = action.payload
    },
    setUserMail: (state, action) => {
      state.mail = action.payload
    },
  },
})

export const { 
  setUserName,
  setUserAge,
  setUserMail
} = userSlice.actions;

export default userSlice.reducer;