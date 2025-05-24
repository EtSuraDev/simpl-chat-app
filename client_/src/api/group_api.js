import axios from 'axios';
import useGroupStore from '../store/groupStore';
export const fetchGroupsData = async(groupIds) => {
    try {
        // console.log(groupIds);

        let groupData = []
        for (let i = 0; i < groupIds.length; i++) {
            const response = await axios.get(`${import.meta.env.VITE_BACK_END}/group/${groupIds[i]}`, {
                withCredentials: true, // 🔹 send cookies (important!)
            });
            let info = response.data.data.group.groupInfo
            let name = response.data.data.group.groupName
            let id = response.data.data.group.id
            let messages = response.data.data.msgs
            groupData.push({ info, name, id, messages })
        }

        useGroupStore.getState().createGroups(groupData)
        return groupData;
    } catch (error) {
        console.log(error)
        throw error
    }

};


// group:
// admin:"fa7770bd-38f8-4d01-b1b7-e00d66dac9ed"
// createdAt:"2025-05-09T23:08:54.000Z"
// groupInfo:"my"
// groupName:"first"
// id:"fdf2b1a5-f3db-4372-97a6-0f3199d8c032"
// members:(2)['fa7770bd-38f8-4d01-b1b7-e00d66dac9ed', 'd5e9dd00-742d-4a4a-8c3a-7b78b5548c6f']
// updatedAt:"2025-05-09T23:12:13.000Z"