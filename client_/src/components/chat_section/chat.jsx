import React from 'react'
import useGroupStore from '../../store/groupStore'
import useUserStore from '../../store/userStore';
import { v4 as uuid } from 'uuid'


function Chat() {
  const groups = useGroupStore((state) => state.groups);
  const selectedGroupId = useGroupStore((state) => state.selectedGroupId);
  const group = groups[selectedGroupId]
  console.log(group)
  const user = useUserStore((state) => state.user)
  const createKey =() =>{
    return uuid()
  }



  return (
    <div className=' text-black overflow-y-scroll h-full pt-[60px] pb-[95px] px-3.5 ' >
      {
        group ?
        group.messages.map((item) => {
          return item.sender === user.userName
            ?
            (
              <div 
                className=' w-full '
                key={`${item.sender}${item.createdAt}${item.message}`}
              >
                <p
                  className=' text-[14px] text-green-600 '
                >You</p>
                <div
                  className=' pl-5 border-l border-dashed border-black  max-w-[87%] w-fit  '>
                  <p
                    className=' p-4 pb-0 bg-green-200 rounded-[0px_20px_0px_0px] '
                  >
                    {item.message}
                  </p>
                  <p
                    className=' p-4 bg-green-200 text-[10px] pt-0 rounded-[0px_0px_20px_20px] '
                  >
                    {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                <div
                  className=' h-6 border-l border-dashed border-black w-full  '
                ></div>
              </div>
            )
            :
            (
              <div
                key={`${item.sender}${item.createdAt}`}
              >
                <p
                  className=' text-[14px] text-red-600 '
                >@{item.sender}</p> 
                <div
                  className=' pl-5 border-l border-dashed border-black max-w-[87%] w-fit '
                >
                  <p
                    className=' bg-red-200 p-4 pb-0  rounded-[0px_20px_0px_0px] '
                  >{item.message}</p>
                   <p
                    className='  bg-red-200 p-4 pt-0 text-[10px] rounded-[0px_0px_20px_20px] '
                  >
                    {new Date(item.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                <div
                  className=' h-6 border-l border-dashed border-black w-full  '
                ></div>
              </div>
            )
        })
        :
        <div
          className=' w-full h-full bg-white flex justify-center items-center '
        >
          <p className=' text-black text-[19px] bg-gray-200 p-3' >select group</p>
        </div>
      }
      {
        group &&
        group.pendingMessages.map((item, index) => (
          <div 
                className=' w-full '
                key={index}
              >
                <p
                  className=' text-[14px] text-red-600 '
                >sending.....</p>
                <div
                  className=' pl-5 border-l border-dashed border-black  max-w-[87%] w-fit  '>
                  <p
                    className=' p-4 text-white pb-4 bg-red-400 rounded-[0px_20px_20px_20px] '
                  >
                    {item.value
}
                  </p>
                </div>
                <div
                  className=' h-6 border-l border-dashed border-black w-full  '
                ></div>
              </div>
        ))
      }
    </div>
  )
}

export default Chat