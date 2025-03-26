import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./portfolioSlice";

export default configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
});
