import React, { useState } from 'react'

function App() {
  const [array,setArray] = useState([]);
  const [value,setValue] = useState('');

  
 const handleClick = (e) =>{
  e.preventDefault();
  array.push(value);
  setValue("");
 }
  return (
    <div>
      <form  onSubmit={handleClick}>

        <input value={value} onChange={e => setValue(e.target.value)} type="text" />
        <button>add</button>

         {array.map((text,id)=>(
          <p key={id}>{text}</p>
         ))}
      </form>
    </div>
  )
}

export default App