import React from 'react'
import { Button } from "@/components/ui/button"
import Sidebar from '../components/home/sidebar'
import Groups from '../components/home/groups'
import Group_chat_room from '../Layout/group_chat_room'
import Header from '../components/home/header'


function Home() {
  return (
    <div className=' h-screen w-full p-[10px] bg-gray-900 flex gap-4 text-white ' >
      <Sidebar/>
      <Groups/>
      <main className=' flex-1 gap-4 flex flex-col overflow-hidden' >
        <Header/>
        <Group_chat_room/>
      </main>
    </div>
  )
}

export default Home
