import { createSlice } from "@reduxjs/toolkit";
import { getCarsCatalog } from "./operationCarAPI";

const initialState = {
  carsCatalog: [],
  page: 1,
  isLoad: false,
  statusError: null,
};

const carsSlice = createSlice({
  name: "auto",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(getCarsCatalog.pending, (state) => {
      state.isLoad = true;
    });
    builder.addCase(getCarsCatalog.fulfilled, (state, action) => {
      state.carsCatalog = state.carsCatalog.concat(action.payload);
      state.isLoad = false;
    });
    builder.addCase(getCarsCatalog.rejected, (state) => {
      state.statusError = "erro-loading";
      state.isLoad = false;
    });
  },
});

export const autoCatalog = carsSlice.reducer;
