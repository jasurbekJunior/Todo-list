import React, { useState } from 'react';

function App() {
  const [array, setArray] = useState([]);
  const [value, setValue] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (value.trim() === "") return;
    setArray([...array, value]);
    setValue("");
  };

  const remove = (txt) => {
    setArray(array.filter((n) => n !== txt));
  };

  const startEdit = (index, text) => {
    setEditIndex(index);
    setEditValue(text);
  };

  const saveEdit = () => {
    const newArray = [...array];
    newArray[editIndex] = editValue;
    setArray(newArray);
    setEditIndex(null);
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
        <button type="submit">add</button>
      </form>
      
      {array.map((text, index) => (
        <div key={index}>
          {editIndex === index ? (
            <>
              <input value={editValue} onChange={(e) => setEditValue(e.target.value)} />
              <button onClick={saveEdit}>save</button>
            </>
          ) : (
            <>
              <p>{text}</p>
              <button onClick={() => startEdit(index, text)}>edit</button>
              <button onClick={() => remove(text)}>delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
