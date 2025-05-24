import React, { useState } from 'react'
import Chat_section from './components/chat_section.jsx'
import Side_bar from './components/side_bar.jsx'
import Header from './components/header'


function Components() {
    const [display, setDisplay] = useState("group")

  return (
    <div 
        className='h-screen flex flex-col overflow-hidden '
    >
        <header
            className=' h-fit '
        >
            <Header/>
        </header>
        <main
            className="flex flex-1 overflow-hidden "
        >
            <aside
                className={` flex-col ${display == "chat" ? "hidden": "flex"} sm:flex flex-1 sm:flex-none`}
            >
                <Side_bar setDisplay={setDisplay} />
            </aside>
            <main
                className={` flex-1 h-full ${display == "chat" ? "flex": "hidden"} sm:flex `}
            >
                <Chat_section setDisplay={setDisplay} />
            </main>
        </main>
    </div>
  )
}

export default Components