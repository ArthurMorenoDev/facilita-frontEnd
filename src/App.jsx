import { BrowserRouter,Routes, Route, Navigate } from "react-router-dom"
import Cadastro from "./pages/cadastro"
import Login from "./pages/login"
function App() {
  

  return (
    <BrowserRouter>
      <Routes>
         <Route path="/"element={<Cadastro />}/>
         <Route path="/Login"element={<Login />}/>
      </Routes>
    </BrowserRouter>
     
  )
}

export default App
