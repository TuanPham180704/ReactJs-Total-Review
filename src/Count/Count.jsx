import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const heavyTask = () => {
  for (let index = 0; index < 10000; index++) {
    let obj = {name : 'Alex',age : 14}
    let objClone = JSON.stringify(obj)
    obj = JSON.parse(objClone)
  }
}

export default function Count() {
  const [width,setWidth] = useState(0)
  const secondsRef = useRef(null)
  useEffect(()=>{
      const measure = () => setWidth(secondsRef.current?.offsetWidth || 0)
      // heavyTask()
      measure()
      window.addEventListener('resize',measure)
      return () => {
        window.removeEventListener('resize',measure)
      }
  },[])     
  
  return (
    <div>
      <section ref={secondsRef} style={{background: 'red'}}>Content</section>
      {width > 300 && <div style={{background: 'blue'}}>Please resize</div>}
    </div>
  )
}
