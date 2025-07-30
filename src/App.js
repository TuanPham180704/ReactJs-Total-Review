import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import { useState } from 'react';

function App() {
  const [name,setName] = useState('Casio')
  return (
    <div className="App">
      
         <button onClick={() => setName('Apple')}>Chang Name</button>
        <Clock name={name}/>
    </div>
  );
}

export default App;
