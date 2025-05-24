import RoutesPath from "./route"
import useGroupStore from "./store/groupStore.js";
import useUserStore from "./store/userStore.js";
import useAuthStore from './store/authStore';
import { useEffect } from "react";
import { fetchUserData } from "./api/user_api.js";
import { fetchGroupsData } from "./api/group_api.js";
import { useNavigate } from "react-router";
import {createSocketRoom} from "./api/chat.js";


function App() {
  const user = useUserStore((state) => state.user);
  const isLogin = useAuthStore((state) => state.isLogin);
  // console.log(user)
  const navigate = useNavigate()
  const groups = useGroupStore((state) => state.groups);
  useEffect(()  =>  {
      const runFetch = async () => {
        try {
          const data = await fetchUserData()
          // console.log(data)
          const groupId = data.map(item => item.id)
            // console.log(groupId)
          const group = await fetchGroupsData(groupId)
          createSocketRoom(groupId)
          console.log(groups)
          
        } catch (error) {
          console.log(error)
          navigate("/signup")
        }
      }
      runFetch()
  },[isLogin])

  return (
    <RoutesPath/>
  )
}

export default App
