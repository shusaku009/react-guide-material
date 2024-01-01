import { createStore, combineReducers } from "redux";

const initialState = 0;
const reducer = (state = initialState, { type, step }) => {
    console.log(SVGUnitTypes)
    switch (type) {
      case "+":
        return state + step;
      case "-":
        return state - step;
      default:
        return state;
    }
  };

  const reducers = combineReducers({
    counter: reducer
  });

export default createStore(
    reducer
);