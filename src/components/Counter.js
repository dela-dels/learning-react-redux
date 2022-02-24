import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  console.log("Inital Count State from the redux store :", count);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button onClick={() => dispatch(increment())}>Increment Count</button>
      </div>
      <div>
        <button
          style={{ marginTop: "10px" }}
          onClick={() => dispatch(decrement())}
        >
          decrement Count
        </button>
      </div>
    </>
  );
}
