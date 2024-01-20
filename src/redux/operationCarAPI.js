import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://65a817a794c2c5762da847b4.mockapi.io";

export const getCarsCatalog = createAsyncThunk(
  "auto/ctalog",
  async (credential, thunkApi) => {
    try {
      const response = await axios.get(`/cars?page=${credential}&limit=12`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
