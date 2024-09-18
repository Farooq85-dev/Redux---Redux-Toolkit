import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement } from "./Actions";

const initialState = {
  marks: 10,
};

const MarksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.marks += 1;
    })
    .addCase(decrement, (state) => {
      state.marks -= 1;
    });
});

export { MarksReducer };
