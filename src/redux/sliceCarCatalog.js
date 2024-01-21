import { createSlice } from "@reduxjs/toolkit";
import { getCarsCatalog } from "./operationCarAPI";

const initialState = {
  IdUpload: [],
  carsCatalog: [],
  page: 0,
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
      state.page = state.page + action.payload.length;
      state.carsCatalog = [...state.carsCatalog, ...action.payload];
      state.isLoad = false;
    });
    builder.addCase(getCarsCatalog.rejected, (state) => {
      state.statusError = "erro-loading";
      state.isLoad = false;
    });
  },
});

export const autoCatalog = carsSlice.reducer;
