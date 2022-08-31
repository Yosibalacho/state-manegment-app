import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { UP_ACTION } from "./store/actions/counter-actions";
import { DOWN_ACTION } from "./store/actions/counter-actions";
import { RESET_ACTION } from "./store/actions/counter-actions";
import { counterReducer } from "./store/reducers/counter-reducer";
export let initialState = 0;
function App() {
  const [myState, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div className="App">
      <div>
        <h1>{myState}</h1>
      </div>
      <button onClick={() => dispatch(UP_ACTION)}>UP</button>
      <button onClick={() => dispatch(DOWN_ACTION)}>DOWN</button>
      <button onClick={() => dispatch(RESET_ACTION)}>RESET</button>
    </div>
  );
}

export default App;
