import React from 'react'
import useChatStore from '../../store/useChatStore'
import useUserDataStore from '../../store/useUserStore'


function Text_area() {
    const messages = useChatStore((state) => state.messages)
    const pendingMessages = useChatStore((state) => state.pendingMessages)
    const userName = useUserDataStore((state) => state.userName )
  return (
    <main className=' w-full h-full text-white rounded-2xl overflow-y-auto flex flex-col gap-2 scrollbar-hide' >
        {messages.map((text) => (
            
            text.userName === userName ? 
                <div key={text.id} className=' text-center max-w-[300px] min-w-[80px] w-fit h-fit bg-gray-900 p-2 rounded-2xl ml-auto ' >
                    {text.text}
                </div>
            :
                <div key={text.id} className=' text-center max-w-[300px] min-w-[80px] w-fit h-fit bg-gray-900 p-2 rounded-2xl ' >
                    {text.text}
                </div>
            
        ))}
        {
            pendingMessages.map(text => (
                <div key={text.id} className=' min-w-[80px] max-w-[300px] w-fit h-fit bg-gray-900 p-2 rounded-2xl ml-auto text-center ' >
                    {text.text}
                </div>
            ))
        }

    </main>
  )
}

export default Text_area
