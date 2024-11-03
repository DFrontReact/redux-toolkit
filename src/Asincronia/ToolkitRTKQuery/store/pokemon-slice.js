import { createSlice } from "@reduxjs/toolkit";

export const pokemonSliceInitialState = {
  pokemon: null,
  counter: 1,
  status: ""
};

export const pokemonSlice = createSlice({
  name: "pokemon-slice",
  initialState: pokemonSliceInitialState,
  reducers: {
    increaseCounter: (state) => {
      state.counter = state.counter + 1
    },
    decreaseCounter: (state) => {
      state.counter = state.counter - 1
    },
  }
})

export const { 
  increaseCounter,
  decreaseCounter,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;