import Home from "./pages/home"
import Login from "./pages/login"
import Signup from "./pages/signup"
import RoutesPath from "./routes"
import createConnection from "./api/socket.io"
import { useEffect } from "react"


function App() {


  useEffect(() => {
    createConnection()
  },[])

  return (
    <RoutesPath/>
  )
}

export default App
