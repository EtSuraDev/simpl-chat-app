import React from 'react'

function Text_area() {
    const texts = [
        {
            id: 1,
            text: "Hello, how are you?",
            sender: "user",
        },
        {
            id: 2,
            text: "I'm fine, thank you!",
            sender: "other",
        },
        {
            id: 3,
            text: "What's your name?",
            sender: "user",
        },
        {
            id: 4,
            text: "I'm John Doe",
            sender: "other",
        },
        {
            id: 5,
            text: "What's your name?",
            sender: "user",
        },
        {
            id: 6,
            text: "What's your name?",
            sender: "other",
        },
        {
            id: 7,
            text: "What's your name?",
            sender: "user",
        },
        {
            id: 8,
            text: "What's your name?",
            sender: "other",
        },
        {
            id: 9,
            text: "What's your name?",
            sender: "user",
        },
        {
            id: 10,
            text: "Hello, how are you? i am fine how are you? and you?",
            sender: "other",
        },
        {
            id: 11,
            text: "Hello, how are you? i am fine how are you? and you? hey i am fine and you? do you know about me?",
            sender: "other",
        },
        {
            id: 12,
            text: "Hello, how are you? i am fine how are you? and you? hey i am fine and you? do you know about me?",
            sender: "user",
        },
        
    ]
  return (
    <main className=' w-full h-full text-white rounded-2xl overflow-y-auto flex flex-col gap-2 scrollbar-hide' >
        {texts.map((text) => (
            
            text.sender === "user" ? 
                <div key={text.id} className=' max-w-[300px] w-fit h-full bg-gray-900 p-2 rounded-2xl ml-auto ' >
                    {text.text}
                </div>
            :
                <div key={text.id} className=' max-w-[300px] w-fit h-full bg-gray-900 p-2 rounded-2xl ' >
                    {text.text}
                </div>
            
        ))}

    </main>
  )
}

export default Text_area
