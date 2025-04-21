
import RoutesPath from "./routes"
import createConnection from "./socket/connect"
import { useEffect } from "react"
import chat from "./socket/socket"
import getAllMessages from "./api/getMessages"
import { useNavigate } from "react-router";
import useChatStore from "./store/useChatStore"



function App() {
  const router = useNavigate()
  const x = useChatStore(state => state.pendingMessages)
  console.log(x)
  useEffect(() => {
    createConnection()
    chat.listen()
    getAllMessages()
      .then(data => {
        if(data == false){
           router("/signup", {replace:true})
        }
        }
        )
  },[])

  return (
    <RoutesPath/>
  )
}

export default App
