import React from 'react'
import { FaPlus } from "react-icons/fa6";


function Sidebar() {
  return (
    <aside className=' w-[100px] h-full rounded-2xl flex justify-between items-center p-5 bg-gray-800  flex-col ' >

      <div className=' text-[12px] flex flex-col gap-4 ' >

        <div className=' bg-gray-700 p-4 rounded-xl cursor-pointer hover:bg-gray-600 text-center  ' >
            <p>
                groups
            </p>
        </div>

        <div className=' bg-gray-700 p-4 rounded-xl cursor-pointer hover:bg-gray-600 text-center  ' >
            <p>
                perons
            </p>
        </div>

        <div className=' bg-gray-700 p-4 rounded-xl cursor-pointer hover:bg-gray-600 text-center  ' >
            <p>
                bots
            </p>
        </div>

      </div>


      <div>
        <div className=' bg-[#c7f0c7] hover:bg-[#e0f5e0] p-5 cursor-pointer rounded-full ' >
            <FaPlus className=' text-gray-500' />
        </div>
      </div>

    </aside>
  )
}

export default Sidebar
