import React from 'react'

function ChatArea(props) {

  console.log(props.messages)
 
  return (
    <div
      className=' w-full h-[88%] flex  my-[41px] mx-4 flex-col overflow-auto '
    >
      {
        props.messages.map((items, index) => {
          return (
              <div className=' bg-blue-500 px-3 py-1.5 rounded-b-2xl rounded-r-2xl mb-3.5  w-[65%]' key={index} >
                <p className='' >
                  {items.text}
                </p>
                <p className=' text-[10px] font-extralight ' >
                  {items.date}
                </p>
              </div>
              )
        })
      }
    </div>
  )
}

export default ChatArea
