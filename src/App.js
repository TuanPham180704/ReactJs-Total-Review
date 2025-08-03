import './App.css'
import User from './ReactHookBasic/useStateHook/User'
import UserClassComponent from './ReactHookBasic/useStateHook/User.class'


function App() {
  
  return (
    <div className='App'>
      <UserClassComponent/>
      <br/>
      <User/>
    </div>
  )
}

export default App
