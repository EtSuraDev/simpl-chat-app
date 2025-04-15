import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";



function Header() {
  return (
    <header className=' bg-inherit rounded-2xl text-white py-1 px-3 flex justify-between items-center gap-4 ' >
        <div>
            <h1 className=' text-5xl logo font-extrabold ' >
                Chat App
            </h1>
        </div>
        <div className=' flex gap-4 justify-end ' >
           <div className=' flex bg-gray-200 rounded-2xl p-2 ' >
                <input type="text" className=' focus:outline-none text-black ' />
                <CiSearch size={26} className=' hover:cursor-pointer text-gray-700 '  />
            </div>
            
            <div className=' p-2 rounded-full bg-gray-200 ' >
                <IoPersonOutline size={26} className=' hover:cursor-pointer text-gray-700 ' />
            </div> 
        </div>
        
    </header>
  )
}

export default Header
