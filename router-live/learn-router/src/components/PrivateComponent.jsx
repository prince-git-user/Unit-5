import { useContext } from "react"
import { AuthContext } from "../contexts/Authcontext"
import {Navigate} from "react-router-dom"

export const PrivateComponent=({children})=>{
const {isAuth}=useContext(AuthContext)
if(!isAuth){
    return <Navigate to="/login"/>
}
return children
}