import React from 'react'
import { useState } from 'react'
export default function User() {
  const [name,setName] = useState('Tuan Dev')
  const [age,setAge] = useState(21)
  const [address,setAddress] = useState({
    nation : 'VietNam',
    city : {
      street : '200 Dong Da',
      house : 'Building'
    }
  })
  const [,forceRerenderAge] = useState(0)
  const  handleClickAge = () => {
    setAge(prevAge => prevAge + 1)
    setName('Lan Anh')
  }
  const handleClickAddress = () => {
    setAddress((prevAddress)=>{
      const newAddress = {...prevAddress.city}
      newAddress.street = '100 Dong Da'
      return {
        ...prevAddress,
        city : newAddress
      }
    })
  }
  const rerenderAge = () => forceRerenderAge((prevState)=> prevState + 1)
  console.log('Re-render');
  
  return (
    <div>
       <h1>User Function</h1>
       <ul>
        <li>First Name : {name}</li>
        <li>Age : {age}</li>
        <li>Nation : {address.nation}</li>
        <li>Street : {address.city.street}</li>
        <li>Building : {address.city.house}</li>
       </ul>
       <button onClick={handleClickAge}>Up Age</button>
       <button onClick={rerenderAge}>Up Age Rerender</button>
       <button onClick={handleClickAddress}>Change Address</button>
    </div>
  )
}
