import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import UseContent from '../useContent/UseContent'

export const UserContext = createContext()
export default function UserEffect() {
  const [name, setName] = useState('Tuan Dev')
  const [age, setAge] = useState(21)
  const [address, setAddress] = useState({
    nation: 'VietNam',
    city: {
      street: '200 Dong Da',
      house: 'Building'
    }
  })
  const getAddress = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          nation: 'VietNam',
          city: {
            street: '51 Nguyen Minh Khong',
            house: 'Building'
          }
        })
      }, 3000)
    })
  }
  const [, forceRerenderAge] = useState(0)
  const handleClickAge = () => {
    setAge((prevAge) => prevAge + 1)
    setName('Lan Anh')
  }
  const handleClickAddress = () => {
    setAddress((prevAddress) => {
      const newAddress = { ...prevAddress.city }
      newAddress.street = '100 Dong Da'
      return {
        ...prevAddress,
        city: newAddress
      }
    })
  }

  const rerenderAge = () => forceRerenderAge((prevState) => prevState + 1)
  console.log('Re-render')
  //Giống componentDidUpdate , effect function chạy lại mỗi khi bị re-render
  // useEffect(()=>{
  //   console.log('useEffect giống componentDidUpdate');
  // })
  //Giống component DidMount ,effect function chạy duy nhất một lần
  //Thường dùng khi gọi API
  useEffect(() => {
    console.log('useEffect giống componentDidUpdate')
    getAddress().then((res) => {
      setAddress((prevState) => {
        const newAddress = { ...prevState }
        newAddress.city = res.city
        return newAddress
      })
    })
    //Cleanup function , chạy kết thúc lần một rồi mới chạy lần 2
    return () => {
      console.log('Huy goi API')
    }
  }, [])
  return (
    <div>
      <h1>useEffect Function Component</h1>
      <UserContext.Provider value={{
         name, address,age
      }}>
      <UseContent />
      </UserContext.Provider>
     
      <button onClick={handleClickAge}>Up Age</button>
      <button onClick={rerenderAge}>Up Age Rerender</button>
      <button onClick={handleClickAddress}>Change Address</button>
    </div>
  )
}
