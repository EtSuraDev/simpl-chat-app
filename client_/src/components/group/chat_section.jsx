import React from 'react'
import Text_area from '../chat/text_area'
import Input from '../chat/input'

function Chat_section() {
  return (
    <div className=' flex-1 bg-gray-700 rounded-2xl p-4 relative ' >
      <Text_area/>
      <Input/>
    </div>
  )
}

export default Chat_section
