import React from 'react'
import Chat_section from '../components/group/chat_section'
import Profile_section from '../components/group/profile_section'


function Group_chat_room() {
  return (
    <div className='flex-1 flex gap-3 overflow-hidden' >
     <Chat_section/>
     <Profile_section/>
    </div>
  )
}

export default Group_chat_room
