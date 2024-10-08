import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
//import { NavBar } from "./components/NavBar"

import './App.css'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo={"Bienvenido a mi Ecomerce"} />
    </div>
  )
}

export default App
