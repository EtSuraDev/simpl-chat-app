import React from 'react'
import Header from './chat_section/header'
import Input from './chat_section/input'
import Chat from './chat_section/chat'
import useGroupStore from '../store/groupStore'
import useUserStore from '../store/userStore'
import { emitMessage } from '../api/chat'
import { v4 as uuid } from 'uuid'




function Chat_section(props) {
  const selectedGroupId = useGroupStore((state) => state.selectedGroupId);
  const user = useUserStore((state) => state.user);
  const addPendingMessage = useGroupStore((state) => state.addPendingMessage);
  const groups = useGroupStore((state) => state.groups);
  
  const x = groups[selectedGroupId]
  let pendingMessage = null
  if(x) {
    let {pendingMessages} = x
    pendingMessage = pendingMessages
  }
  const onSend = (value, setInputValue) => {
    if(selectedGroupId){
      let id = uuid()
      let userId = user?.userId
      addPendingMessage(selectedGroupId, {value, id})
      console.log(userId)
      emitMessage({value,userId, selectedGroupId, id})
      setInputValue("")
    }
  }

  const onKeyDown = (e, value, setInputValue) => {
    if(e.key == "Enter"){
      console.log(value);
      
      onSend(value, setInputValue)
    }
  }

  

  return (
    <div className=' w-full h-full bg-white relative ' >
      <Header setDisplay={props.setDisplay} />
      <Chat/>
      <Input onSend={onSend} onKeyDown={onKeyDown}/>
    </div>
  )
}

export default Chat_section
