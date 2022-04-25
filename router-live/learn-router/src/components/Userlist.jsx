import { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"

export const Userlist=()=>{
    const [users,setUsers]=useState([])
    useEffect(()=>{
        //https://reqres.in/api/users
        axios.get("https://reqres.in/api/users").then(({data})=>{
            console.log(data)
            setUsers(data.data)
        })

    },[])
    return (
        <div>
            {users.map((user)=>{
                return (<div>
                        <p key={user.id}>
                            <Link to ={`/users/${user.id}`}>{user.id}-{user.first_name}</Link>
                            {/* <img src={user.avatar}/> */}
                        </p>
                        
                        </div>
                )

            })}
        </div>
    )
}