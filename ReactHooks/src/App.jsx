import { useState } from "react";
import "./App.css";

import OptionsSelect from "./Components/OptionsSelect";
import Dropdown from "./Components/Dropdown";

function App() {
  const [options, setOptions] = useState("options1");

  function optionChangeHandler(event) {
    const selectedOption = event.target.value;
    setOptions(selectedOption);
  }

  return (
    <>
      <p>-----------------------------------------------</p>
      <OptionsSelect name={options} />
      <Dropdown value={options} optionChangeHandler={optionChangeHandler} />
    </>
  );
}

export default App;
