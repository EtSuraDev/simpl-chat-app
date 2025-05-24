import React from 'react'
import { IoMdArrowBack } from "react-icons/io";
import useGroupStore from '../../store/groupStore'
import useUserStore from '../../store/userStore';



function Header(props) {
  const groups = useGroupStore((state) => state.groups);
  const selectedGroupId = useGroupStore((state) => state.selectedGroupId);
  const group = groups[selectedGroupId]
  return (
    <div 
      className=' flex absolute top-0 left-0 right-0 h-[55px] w-full bg-[rgba(217,217,217,1)] text-black items-center justify-between p-4 '
    >
      <div
        className=' flex items-center gap-5 '
      >
        <IoMdArrowBack size={26} className=' flex md:hidden cursor-pointer ' onClick={()=>props.setDisplay("group")} />
        <img src="./ai-generated-7715246.jpg" alt="" className=' w-[50px] h-[50px] rounded-full ' />

        <p
          className=' font-bold '
        >
          { group ? group.groupName : "select group"}
        </p>

      </div>

      <div>
        <p
          className=' text-green-800 text-[14px] '
        >
          55 online
        </p>
      </div>


    </div>
  )
}

export default Header
