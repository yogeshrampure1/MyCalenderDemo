import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import { useState } from 'react';

function App() {
  const thisDate = new Date();
  const [thisMonth, setThisMonth]=useState(thisDate.toLocaleString('default', { month: 'long' }));
  const getMonth=(m)=>{
    setThisMonth(m)
  }
  return (
    <div className="App">
      <Navbar getMonth={getMonth}/>
      <Home thisMonth={thisMonth}/>

    </div>
  );
}

export default App;
