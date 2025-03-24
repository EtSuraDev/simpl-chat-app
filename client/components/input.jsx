import React from 'react'

function Input(props) {
  return (
    <div className=' absolute bottom-1.5 bg-gray-400 w-[80%] flex justify-between px-2.5 left-1/2 -translate-x-1/2 rounded-sm ' >
      <input  type="text"
        className=' h-11 w-[80%] focus:outline-none  '
        value={props.inputValue}
        onChange={(e) => {
          props.setInputValue(e.target.value)
        }}
      />
      <button
        className=' font-normal text-[19px] cursor-pointer hover:text-blue-700 px-3 '
        onClick={() => {
          props.sendMessage()
          props.setInputValue("")
        }}
      >Send</button>
    </div>
  )
}

export default Input
