import { useState } from "react";

const Example = () => {
  let [val, setVal] = useState(0);
  return (
    <>
      <input 
        type="text"
        onChange={(e) => {
          // const setFn = val[1];
          setVal(e.target.value)
        }} /> = {val}
    </>
  );
};

export default Example;
