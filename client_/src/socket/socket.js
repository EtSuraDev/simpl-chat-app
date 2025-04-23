import createConnection from "./connect"
const io = createConnection()
import useChatStore from '../store/useChatStore'
import useUserDataStore from "../store/useUserStore"






const send = (msg) => {
    const { userName } = useUserDataStore.getState();
    const { addPendingMessage, setInput } = useChatStore.getState();

    io.emit("message", { text: msg, userName });
    addPendingMessage({ text: msg, userName }); // Use msg directly instead of stale input
    setInput("");
};

const listen = () => {
    io.on("message", (msg) => {
        const { userName } = useUserDataStore.getState();
        const { clearPendingMessages, addMessage } = useChatStore.getState();

        if (msg.userName === userName) {
            clearPendingMessages(); // Clear only if it's your own message
        }

        addMessage(msg);
    });
};

export default { send, listen }