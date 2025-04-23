import React from 'react'
import useChatStore from '../../store/useChatStore'
import useUserDataStore from '../../store/useUserStore'


function Text_area() {
    const key = () => {
        return Math.floor(Math.random() * 100000)
    }
    const messages = useChatStore((state) => state.messages)
    const pendingMessages = useChatStore((state) => state.pendingMessages)
    const userName = useUserDataStore((state) => state.userName)
    const hour_minute_second = (data) => {
        const date = new Date(data)
        const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }
  return (
    <main className=' w-full h-full text-white rounded-2xl overflow-y-auto flex flex-col gap-2 scrollbar-hide relative' >
        {messages.map((text) => (
            
            text.userName === userName ? 
                <div key={key()} className=' text-center max-w-[300px] min-w-[80px] w-fit h-fit bg-gray-900 p-2 rounded-2xl ml-auto ' >
                    <p>{text.text}</p>
                    <p
                        className=' text-[10px] text-gray-400 text-end '
                    >{hour_minute_second(text.createdAt)}</p>
                </div>
            :
                <div key={key()} className=' text-center max-w-[300px] min-w-[80px] w-fit h-fit bg-gray-900 p-2 rounded-2xl ' >
                    <p 
                        className=' text-[10px] text-gray-400 text-start '
                    > @{text.userName} </p>
                    <p>{text.text}</p>
                     <p
                        className=' text-[10px] text-gray-400 text-end '
                    >{hour_minute_second(text.createdAt)}</p>
                </div>
            
        ))}
        {
            pendingMessages.map(text => (
                <div key={key()} className=' min-w-[80px] max-w-[300px] w-fit h-fit bg-gray-900 p-2 rounded-2xl ml-auto text-center ' >
                    {text.text}
                </div>
            ))
        }

    </main>
  )
}

export default Text_area
