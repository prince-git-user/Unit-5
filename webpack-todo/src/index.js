import "./index.css";
import todoimg from "./pht/todo.png";


const h1= document.createElement("h1")
h1.innerHTML="What do you want to do"
h1.classList.add("rum")
const inputbox = document.createElement("input")
    const inputdate = document.createElement("input")
    inputdate.setAttribute("type","date")

const img= document.createElement("img")
        img.setAttribute("src",`${todoimg}`)
    
    const button = document.createElement("button")
         button.innerHTML="submit"
         button.addEventListener("click",show)

         function show(){
            // document.getElementById("tbody").innerHTML=""
            let row = document.createElement("tr")
               let r1=document.createElement("td")
                r1.textContent=inputbox.value
              let  r2=document.createElement("td")
                r2.textContent=inputdate.value
                row.append(r1,r2)
                console.log(r1,r2)
                document.querySelector("tbody").append(row)
         }
         document.getElementById("main").append(img)

         document.getElementById("main").append(h1,inputbox,inputdate,button)