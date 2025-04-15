import React from 'react'

function Input() {
  return (
    <div className=' absolute flex gap-4 inset-x-0 left-1/2 transform -translate-x-1/2 bottom-7 max-[300px] bg-gray-300 text-gray-900 rounded-2xl justify-between  p-2 px-4 ' >
      <input type="text" className=' w-[80%] focus:outline-none ' />
      <button className=' hover:cursor-pointer font-bold '>SEND</button>
    </div>
  )
}

export default Input
