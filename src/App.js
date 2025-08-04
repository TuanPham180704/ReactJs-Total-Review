import { useState } from 'react'
import './App.css'
import UserEffect from './ReactHookBasic/useEffect/UserEffect'
import User from './ReactHookBasic/useStateHook/User'
import UserClassComponent from './ReactHookBasic/useStateHook/User.class'


function App() {
  const [isShow,setIsShow] = useState(true)
  
  return (
    <div className='App'>
      {isShow && <UserEffect/>}
      <button onClick={()=> setIsShow(false)}>Change Show Active</button>
    </div>
  )
}

export default App
