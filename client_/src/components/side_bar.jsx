import React from 'react'
import Group from './side_bar/group'
import Header from './side_bar/header'

function Side_bar(props) {
  return (
    <>
      <div className=' w-full sm:w-[270px] lg:w-[425px] h-full  bg-[rgba(243,244,246,1)] text-black p-2 pr-4 flex flex-col gap-5 overflow-y-scroll relative ' >
        <Header/>
        <Group setDisplay={props.setDisplay} />
      </div>
    </>
  )
}

export default Side_bar
