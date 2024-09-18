// Create Store
import { configureStore } from "@reduxjs/toolkit";
import { MarksReducer } from "./reducer";

const store = configureStore({
  //Inserting Reducer
  reducer: {
    MarksReducer,
  },
});

export { store };
