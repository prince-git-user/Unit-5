import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import axios from "axios"
export const Userdetails=()=>{
    const {id}=useParams()
const [users,setUsers]=useState({})
    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/${id}`).then(({data})=>{
            setUsers(data.data)
        })
    },[])
    return (
       
        <div> 
            <div>id is :{id}</div>
            <div>first Name :{users.first_name}</div>
            <div>last Name :{users.last_name}</div>
            <img src={users.avatar}/>
            </div>
    )
}