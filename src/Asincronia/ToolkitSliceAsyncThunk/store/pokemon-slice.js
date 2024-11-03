import { createSlice } from "@reduxjs/toolkit";
import { getPokemonById } from "../services/getPokemonById";

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
    setPokemon: (state, action) => {
      state.pokemon = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPokemonById.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getPokemonById.fulfilled, (state, action) => {
        state.pokemon = action.payload
        state.status = 'fulfilled'
      })
      .addCase(getPokemonById.rejected, (state) => {
        state.status = 'rejected'
      })
  }
})

export const { 
  increaseCounter,
  decreaseCounter,
  setPokemon
} = pokemonSlice.actions;

export default pokemonSlice.reducer;