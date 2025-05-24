import React from 'react'
import useUserStore from '../store/userStore';
import { useNavigate } from 'react-router';
import { FaUser } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import axios from "axios";





function Header() {
  let user = useUserStore(state => state.user)
  let navigate = useNavigate()


  const logoutUser = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACK_END}/auth/signout`, {}, {
        withCredentials: true, // important for cookies
      });
      navigate("/login", {replace: true})
      return res.data; // success message
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  };

  return (
    <div 
      className=' flex w-full h-[50px] bg-white justify-between px-5 py-2 gap-5 sm:gap-[40%] items-center border-b border-black '
    >
      <div
        className='flex items-center gap-4 font-bold justify-between cursor-pointer text-black'
      >
        <div className=' w-[40px] h-[40px] rounded-full bg-gray-300 flex justify-center items-center ' >
          <FaUser size={23} />
        </div>
        <p>{user?.userName}</p>
      </div>
      <div
        className=' text-black flex items-center text-[11px] cursor-pointer '
        onClick={() => {
          logoutUser()
        }}
      >
        <IoIosLogOut size={23}/>
        <p>Logout</p>
      </div>
    </div>
  )
}

export default Header