import './App.css';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count+1);
  };

  const decrement = () =>{
    setCount(count-1);
  };

  return (
    <>
      <h1>Countem</h1>
      <p>The Count is {count}</p>
      <button onClick={decrement} className='button'>-</button>
      <button onClick={increment} className='button'>+</button>
    </>
  );
}

export default App;
