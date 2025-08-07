import React, { useReducer } from 'react'

const initialState = { age: 21 }

const init = (initArg) => {
  return {...initArg,age : initArg.age + 4};
}
const createIncreaseAge = () => {
  return { type: 'increase_age' }
}

const createDecreaseAge = () => {
  return { type: 'decrease_age' }
}

const createIncreaseXAge = (payload) => {
  return { type: 'increase_Xage', payload }
}
const log = () => {
  return (state ,action) => {
    console.group(action.type)
    console.log('prevstate',state);
    const newState = reducer(state,action)
    console.log('newState',newState);
    console.groupEnd()
    return newState
  }
}

const reducer = (state, action) => {
  if (action.type === 'increase_age') {
    return { ...state, age: state.age + 1 }
  }
  if (action.type === 'decrease_age') {
    return { ...state, age: state.age - 1 }
  }
  if (action.type === 'increase_Xage') {
    return { ...state, age: state.age + action.payload }
  }
  throw new Error('Invalid action type',action)
}

export default function Counter() {
  const [state, dispatch] = useReducer(log(), initialState,init)

  const handleIncreaseAge = () => {
    dispatch(createIncreaseAge())
  }

  const handleDecreaseAge = () => {
    dispatch(createDecreaseAge())
  }

  const handleIncreaseXAge = (value) => {
    dispatch(createIncreaseXAge(value))
  }

  return (
    <div>
      <h3>Age: {state.age}</h3>
      <button onClick={handleIncreaseAge} style={{ background: 'red' }}>
        Increase Age
      </button>
      <button onClick={handleDecreaseAge} style={{ background: 'green' }}>
        Decrease Age
      </button>
      <button onClick={() => handleIncreaseXAge(3)} style={{ background: 'blue' }}>
        Increase X Age
      </button>
    </div>
  )
}
