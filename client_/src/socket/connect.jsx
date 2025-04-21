import {io} from "socket.io-client"


const createConnection = () => {
    return io(import.meta.env.VITE_BACK_END);
}



export default createConnection
