import axios from "axios"
import {io} from "socket.io-client"
const socket = io(import.meta.env.VITE_BACK_END);



const createConnection = () => {
    socket.on("message", (m) => {
        console.log(m)
    })
    return () => {
        socket.off("message", () => console.log("desconected"));
    };
}


export default createConnection
