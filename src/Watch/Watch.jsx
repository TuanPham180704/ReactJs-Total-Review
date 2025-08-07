import React, { useEffect, useRef, useState } from 'react'

function WatchTimer(){
  const [seconds,setSecond] = useState(0)
  const intervalRef = useRef(null)
  useEffect(()=>{
   intervalRef.current =  setInterval(()=>{
     setSecond(prev => prev + 1)
     console.log('setInterval dang chay !');
     
   },1000)
   return () => {
    clearInterval(intervalRef.current)
    console.log('Watch timer umoundted');
   }
  },[])
  return (
    <div>Watch : {seconds}</div>
  )
}


export default function Watch() {
  const [visible,setVisible] = useState(true)
  return (
    <div>
      <button  onClick={()=> setVisible(prev => !prev)}>Set Timer Visible Watch</button>
       {visible && <WatchTimer/>}
    </div>
  )
}
