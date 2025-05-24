import createConnection from "../socket"
import useGroupStore from '../store/groupStore';
let socket = null


const createSocketRoom = async(groups = []) => {
    try {
        socket = createConnection()

        socket.on("connect", () => {
            console.log("client connect to server")
            socket.emit("groups_connection", { groupId: groups })
                // console.log(groups)
            socket.on("receive_message", (msg) => {
                // console.log(1)
                // console.log("Received:", msg);

                useGroupStore.getState().confirmMessage(msg.groupId, { message: msg.text, id: msg.id, replayTo: msg.replayTo, sender: msg.name, createdAt: msg.createdAt })
            });
        })
        return socket
    } catch (error) {
        console.log(error)
        throw error
    }
}

const emitMessage = (data) => {
    // console.log(data)
    if (socket && socket.connected) {
        socket.emit("msg", { groupId: data.selectedGroupId, text: data.value, userName: data.userId, replayTo: null, id: data.id });
    } else {
        console.log("Socket not connected");
    }
};



export { createSocketRoom, emitMessage }