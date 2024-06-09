import './App.css';
import { useState } from 'react';
import logo from './Elements/LOGO_Countem.png';



function App() {

  const [count, setCount] = useState(0);

  const increment = () =>{
    if (count != 50){
    setCount(count+1);
    }
  };

  const decrement = () =>{
    if (count != 0){
    setCount(count-1);
    }
  };

  return (
    <div>
      <div class='LOGO'><img src={logo}/></div>
      <div class='Count font-SFProRounded'>{count}</div>
      <div class='Column'>
        <button class='Button font-SFProRounded' onClick={decrement}>-</button>
        <button class='Button font-SFProRounded' onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default App;
