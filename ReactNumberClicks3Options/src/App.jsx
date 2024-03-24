import { useRef, useState } from "react";
import "./App.css";

import Button from "./assets/Componets/Button.jsx";
function App() {
  const [total, setTotal] = useState(0);

  const resetButtonHandler = () => {
    refButton.current = 0;
    setTotal(refButton.current);
  };

  const refButton = useRef(0);

  const buttonHandler = () => {
    refButton.current += 1;
    setTotal(refButton.current);
  };

  return (
    <>
      <h1>React Number Clicks 3 Options</h1>
      <Button ref={refButton} buttonHandler={buttonHandler}></Button>
      <h3>Numero de clicks: {total}</h3>
    </>
  );
}

export default App;
