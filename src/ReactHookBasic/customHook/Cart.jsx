import React, { useEffect, useState } from 'react'
import { getUser } from './api'
import useUser from './useUser'

export default function Cart() {
   const {user} = useUser({})
  return <div>Card {user?.name}</div>
}
