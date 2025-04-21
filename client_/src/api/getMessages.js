import axios from "axios";
import useChatStore from '../store/useChatStore'
import useUserDataStore from "../store/useUserStore";
const { getState } = useChatStore



const getAllMessages = async() => {
    try {
        const { userName, setUserName, setUserProfile } = useUserDataStore.getState();
        const { addMessage } = getState()
        const res = await axios.get(`${import.meta.env.VITE_BACK_END}`, {
            withCredentials: true
        })
        res.data.data.texts.forEach(element => {
            addMessage(element)
        });
        setUserName(res.data.data.userAccount.userName)
        setUserProfile(res.data.data.userAccount.image)
        return true
    } catch (error) {
        return false
    }
}


export default getAllMessages