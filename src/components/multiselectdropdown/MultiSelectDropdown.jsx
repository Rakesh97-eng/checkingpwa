import { useState } from "react";

const MultiSelectDropDown = () => {
  const [multiSelect, setMulitSelect] = useState([]);
  const handleMultiDropSelect = (e) => {
    if (multiSelect.indexOf(e.target.value) > -1) {
      let removeValue = multiSelect.filter((m) => m !== e.target.value);
      setMulitSelect((prev) => [...removeValue]);
      document.getElementById(e.target.value).style.background = "none";
    } else {
      const addMulitvalue = [...multiSelect, e.target.value];
      setMulitSelect([...addMulitvalue]);
      addMulitvalue.forEach((a, i) => {
        document.getElementById(a).style.background = "yellow";
      });
    }
  };
  return (
    <>
      <select onChange={(e) => handleMultiDropSelect(e)}>
        <option id="one" value="one">
          one
        </option>
        <option id="two" value="two">
          two
        </option>
        <option id="three" value="three">
          three
        </option>
        <option id="four" value="four">
          four
        </option>
        <option id="five" value="five">
          five
        </option>
      </select>
    </>
  );
};

export default MultiSelectDropDown;
