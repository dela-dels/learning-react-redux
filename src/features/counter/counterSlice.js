import { createSlice } from "@reduxjs/toolkit";

// In creating a slice, we are required to provide a string name for identifying the slice
// an initial value for state and one of more reducers(reducer functions) to define how state can
// be updated
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Here, we are able to "mutate" becuase redux toolkit allows us to.
      // The state is not actually mutated becuase  redux toolkit uses the Immer lib
      // which is able to detect changes to a "draft state" (sort of a temporary copy or a copy of the state)
      // and produces a brand new immutable state base off those changes.
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // the action parameter provides a payload property that allows us to ppush additional info to state
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// this line of code provides us with the custom counterReducer reducer to be used
// in other places of our app
export default counterSlice.reducer;
