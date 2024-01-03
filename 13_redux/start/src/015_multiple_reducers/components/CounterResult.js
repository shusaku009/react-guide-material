import { useCounter } from "../context/CounterContext";
import { useSelector } from "react-redux"
const CounterResult = () => {
  // const state = useCounter();
  const state = useSelector(state => state);
  // console.log(state);
  return <h3>{state}:{state}</h3>;
};

export default CounterResult;