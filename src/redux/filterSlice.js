import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    filter: (state, action) => {
        return {
          filter: action.payload,
        }
    },
  },
});

export const { filter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;