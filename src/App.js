import './App.css'
import Clock from './Clock'
import { useState } from 'react'

function App() {
  const [name, setName] = useState('Casio')
  const [visible, setVisible] = useState(true)
  return (
    <div className='App'>
      <button onClick={() => setName('Apple')}>Chang Name</button>
      <button onClick={() => setVisible(false)}>Chang Visible</button>
      {visible && <Clock name={name} />}
    </div>
  )
}

export default App
