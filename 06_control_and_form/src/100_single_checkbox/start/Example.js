import { useState } from "react";

const Example = () => {
  const [isChecked, setIsChecked] = useState(true);

  const toggleChecked = (e) => {
    setIsChecked(preveState => !preveState);
    // ↑下のコードの省略形
    // setIsChecked((prevState) => {
    //   let state = !prevState;
    //   return state;
    // });
  };

  return (
    <div>
      <label htmlFor="my-check">
        チェック : 
      </label>
      <input
        type="checkbox"
        id="my-check"
        checked={isChecked}
        onChange={(e) => toggleChecked(e)}
      />
      <div>{isChecked ? "ON!" : "OFF!"}</div>
    </div>
  );
};

export default Example;
