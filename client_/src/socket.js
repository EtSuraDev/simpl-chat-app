import { io } from "socket.io-client"


const createConnection = () => {
    return io(
        import.meta.env.VITE_BACK_END, {
            withCredentials: true,
            transports: ["websocket"], // optional, to force websocket
        })
}



export default createConnection