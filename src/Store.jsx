import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducer";

const Store = configureStore({
  reducer: {
    a: customReducer,
  },
});

export { Store };
