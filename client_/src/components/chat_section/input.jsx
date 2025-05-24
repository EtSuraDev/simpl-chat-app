import React, { useState } from 'react'

function Input(props) {
  const [inputValue, setInputValue] = useState("")
  // console.log(inputValue)
  return (
    <div
        className=' flex justify-center absolute left-0 right-0 bottom-9 h-[50px] w-full  items-center gap-4 text-black '
    >
        <input type="text" className=' h-[40px] w-[60%] bg-[rgba(217,217,217,1)] rounded-[4px] outline-none border border-gray-500 px-2 max-w-[500px]  '
          onChange={(e) => setInputValue(e.target.value) }
          value={inputValue}
          onKeyDown={(e)=>props.onKeyDown(e,inputValue,setInputValue)}
        />
        <button
            className=' bg-[rgba(217,217,217,1)] border border-gray-500 px-4 py-1.5 rounded-[4px] cursor-pointer '
            onClick={() => props.onSend(inputValue,setInputValue)}
        >
            send
        </button>
    </div>
  )
}

export default Input