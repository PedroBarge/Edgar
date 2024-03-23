import { useState } from "react";
import "./App.css";

function App() {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [operator, setOperator] = useState("+");
  const [totalCount, setTotalCount] = useState(0);

  const handleClick = () => {
    if (firstValue === 0 && secondValue === 0) {
      alert("Please select a value before clicking the button");
    };
    switch (operator) {
      case "+":
        setTotalCount(firstValue + secondValue);
        break;
      case "-":
        setTotalCount(firstValue - secondValue);
        break;
      case "*":
        setTotalCount(firstValue * secondValue);
        break;
      case "/":
        setTotalCount(firstValue / secondValue);
        break;
      default:
        break;
    }
  };

  const convertToBinary = (value) => {
    return value.toString(2);
  };

  const convertToHexadecimal = (value) => {
    return value.toString(16);
  };

  const clear = () => {
    setFirstValue(0);
    setSecondValue(0);
    setOperator("+");
    setTotalCount(0);
  };
  return (
    <>
      <h1>Calculator</h1>
      <div>
        <span>Frist value: </span>
        <input
          type="text"
          value={firstValue}
          onChange={(e) => setFirstValue(Number(e.target.value))}
        />
        <span> </span>
        <select value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <span> </span>
        <span>Second value: </span>
        <input
          type="text"
          value={secondValue}
          onChange={(e) => setSecondValue(Number(e.target.value))}
        />
      </div>

      <div>
        <span>Total: </span>
        <input type="text" value={totalCount} readOnly />
        <span> </span>
        <span>Binary: </span>
        <input type="text" value={convertToBinary(totalCount)} />
        <span> </span>
        <span>Hexadecimal: </span>
        <input type="text" value={convertToHexadecimal(totalCount)} />
      </div>
      <div>
        <button onClick={handleClick}>Calculate</button>
      </div>
      <button onClick={clear}>Clear</button>
    </>
  );
}

export default App;
