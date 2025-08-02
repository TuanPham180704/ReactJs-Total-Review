import './App.css'
import BareInput from './BareInput'
import Clock from './Clock'
import { useState } from 'react'
import Layout from './Layout'
import BareButton from './BareButton'
import LoginConTroller from './LoginConTroller'
import CorrectlyState from './CorrectlyState'
import ProductsList from './ProductsList/ProductsList'
import Form from './Form/Form'
import Calculator from './Calculator/Calculator'


function App() {
  // const [name, setName] = useState('Casio')
  // const [visible, setVisible] = useState(true)
  return (
    <div className='App'>
      {/* <button onClick={() => setName('Apple')}>Chang Name</button>
      <button onClick={() => setVisible(false)}>Chang Visible</button>
      {visible && <Clock name={name} />} */}
      {/* <Layout>
        <h2>Hello Anh Em Cố Gắng Lên Nhé !!!</h2>
        <BareButton/>
        <BareInput type='password' name='input' value='hehe' onChange={() => {}} />
      </Layout>
      <LoginConTroller hidden={false}/>
      <CorrectlyState/>
      <ProductsList/> */}
       {/* <Form/> */}
       <Calculator/>
    </div>
  )
}

export default App
