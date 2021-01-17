import { useState } from 'react';

let filterTypes = ['Title', 'Author', 'Genre', 'Form'];
let timeout;

function Input({ parameters, addFilter, index, deleteFilter }) {
  const [type, setType] = useState(parameters.type);
  const [value, setValue] = useState(parameters.value);

  const handleTypeChange = (event) => {
    let newValue = event.target.value;
    setType(newValue);
    addFilter(index, newValue, value);
  };

  const handleValueChange = async (event) => {
    clearTimeout(timeout);
    let newValue = event.target.value;
    setValue(newValue);
    timeout = await setTimeout(() => {
      addFilter(parameters.id, type, newValue);
    }, 1000);
  };

  const handleDelete = () => {
    deleteFilter(parameters.id);
  };

  return (
    <>
      <h5>{parameters.id}</h5>
      <label htmlFor='type'>Filter Type</label>
      <select
        type='text'
        id='type'
        name='type'
        value={type}
        onChange={handleTypeChange}
      >
        {filterTypes.map((filter, index) => (
          <option key={index}>{filter}</option>
        ))}
      </select>
      <label htmlFor='filter'>Filter Parameter</label>
      <input
        type='text'
        id='filter'
        name='filter'
        value={value}
        onChange={handleValueChange}
      ></input>
      <button type='button' onClick={handleDelete}>
        x
      </button>
      <br></br>
    </>
  );
}

export default Input;
