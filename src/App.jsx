import React from 'react'
import { useState } from 'react'

function App() {
  const [array,setArray] = useState([]);
  const [value,setValue] = useState("");
  

  const handleClick = (e) =>{
e.preventDefault();
array.push(value);
setValue("");

  }
  const remove =(txt) =>{
    setArray(array.filter((n) => n !== txt));

  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <input onChange={e => setValue(e.target.value)} type="text" />
        <button>add</button>
      </form>
      {
        array.map((text,index) => (
        <div key={index}>
            <p>{text}</p>
            <button onClick={() => remove(text) }>remove</button>
        </div>
        ))
      }
    </div>
  )
}

export default App