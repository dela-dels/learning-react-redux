import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice";

export default configureStore({
  reducer: {
    // we get a counterReducer from the slice we create. this name is gotten by
    // a combination of the slice name and Reducer
    counter: counterReducer,
  },
});
