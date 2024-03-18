/* eslint-disable react/prop-types */
const Dropdown = ({ value, optionChangeHandler }) => (
  <select onChange={optionChangeHandler} value={value}>
    <option value="options1">options1</option>
    <option value="options2">options2</option>
    <option value="options3">options3</option>
    <option value="options4">options4</option>
  </select>
);

export default Dropdown;
