import { useState } from 'react'
import './App.css'

import Navication from './ReactHookBasic/customHook/Navication'
import Cart from './ReactHookBasic/customHook/Cart'


function App() {
  const [isShow,setIsShow] = useState(true)
  
  return (
    <div className='App'>
      {/* {isShow && <UserEffect/>}
      <button onClick={()=> setIsShow(false)}>Change Show Active</button> */}
      <Cart/>
      <Navication/>
    </div>
  )
}

export default App
