import {Link} from "react-router-dom"
export const Navbar=()=>{
    const navbar=[{
       title:"Home",
       to:"/"
    },{
        title:"About",
        to:"/about"
    },{
        title:"Users",
        to:"/users"
    }]
    return(
        <div>
            {navbar.map((e,i)=>{
                return < Link key={i} to={e.to}>{e.title} </Link>
            })}

        </div>
    )
}