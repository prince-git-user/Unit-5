import { useState } from 'react'
import{Button} from "./components/Button"
import './App.css'

function App() {
  const [theme1, setTheme1] = useState("first_btn")
 
return (
  <div className="App">

    <Button theme1={theme1}>Primary Button</Button> {/* bg coloer blue*/}
    <Button  >Default Button</Button>
    <Button theme1={"dott"} >Dashed Button </Button> <br/>
    <Button theme1={"textbt"} >Text Button</Button>
    <Button theme1={"lestbt"}>Link Button </Button>{/*colore blue no border*/}
   
  </div>
)
}


export default App