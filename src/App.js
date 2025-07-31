import './App.css'
import BareInput from './BareInput'
import Clock from './Clock'
import { useState } from 'react'
import Layout from './Layout'

function App() {
  // const [name, setName] = useState('Casio')
  // const [visible, setVisible] = useState(true)
  return (
    <div className='App'>
      {/* <button onClick={() => setName('Apple')}>Chang Name</button>
      <button onClick={() => setVisible(false)}>Chang Visible</button>
      {visible && <Clock name={name} />} */}
      <Layout>
        <h2>Hello Anh Em Cố Gắng Lên Nhé !!!</h2>
        <BareInput type='password' name='input' value='hehe' onChange={() => {}} />
      </Layout>
    </div>
  )
}

export default App
