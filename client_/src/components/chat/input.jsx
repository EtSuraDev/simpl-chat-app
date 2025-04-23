import React, { useState } from 'react'
import useChatStore from '../../store/useChatStore'
import EmojiPicker from 'emoji-picker-react';
import { MdOutlineInsertEmoticon } from "react-icons/md";
import { MdClear } from "react-icons/md";
import chat from "../../socket/socket"




function Input() {
  const [displayEmojiPicker, setDisplayEmojiPicker] = useState(false)
  const setInput = useChatStore((state) => state.setInput)
  const input = useChatStore((state) => state.input)

  const handleEmojiClick = (emojiData, event) => {
    setInput(prev => prev + emojiData.emoji);
  };

  return (
    <div className=' absolute flex gap-4 inset-x-0 left-1/2 transform -translate-x-1/2 bottom-7 max-w-[500px] w-[70%] bg-gray-300 text-gray-900 rounded-2xl justify-between  p-2 px-4 ' >
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className=' w-[80%] focus:outline-none ' />
        {/* <div className={` max-h-[400px] max-w-[300px] ${displayEmojiPicker ? "block":"hidden"  } absolute z-50 bottom-24 `}>
          <EmojiPicker onEmojiClick={handleEmojiClick}  />
        </div> */}
        {
            displayEmojiPicker? 
            < MdClear
              size={30}
              onClick={() => setDisplayEmojiPicker(prev => !prev)}
              className={` cursor-pointer   `}/>
              :
            < MdOutlineInsertEmoticon
              size={30}
              onClick={() => setDisplayEmojiPicker(prev => !prev)}
              className={` cursor-pointer   `}/>
        }
      <button className=' hover:cursor-pointer font-bold '
        onClick={() => chat.send(input)}
      >
        SEND
      </button>
    </div>
  )
}

export default Input
