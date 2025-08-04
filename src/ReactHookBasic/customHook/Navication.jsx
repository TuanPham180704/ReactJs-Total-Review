import React, { useEffect, useState } from 'react'
import { getUser } from './api'

export default function Navication() {
  const [user, setUser] = useState({})
  useEffect(() => {
    getUser().then((res) => {
      setUser(res.data)
    })
  }, [])
  return <div>Navication {user?.name} </div>
}
