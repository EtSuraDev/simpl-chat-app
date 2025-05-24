import axios from 'axios';
import useUserStore from '../store/userStore';

export const fetchUserData = async() => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_BACK_END}`, {
            withCredentials: true, // 🔹 send cookies (important!)
        });
        useUserStore.getState().setUser(response.data.data)
            // console.log(response.data.groups)
        return response.data.groups;
    } catch (error) {
        throw error
    }

};