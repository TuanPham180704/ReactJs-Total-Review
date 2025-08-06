import { useContext } from "react"
import { UserContext } from "../useEffect/UserEffect"

export default function UseContent() {
   const {name,age,address} = useContext(UserContext)
  return (
    <div>
      <ul>
        <li>First Name : {name}</li>
        <li>Age : {age}</li>
        <li>Nation : {address.nation}</li>
        <li>Street : {address.city.street}</li>
        <li>Building : {address.city.house}</li>
      </ul>
    </div>
  )
}
