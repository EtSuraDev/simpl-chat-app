import React from 'react'
import useGroupStore from '../../store/groupStore'
import { object } from 'yup';

function Group(props) {
    const groups = useGroupStore((state) => state.groups);
    // console.log(groups)
    const setSelectedGroupId = useGroupStore((state) => state.setSelectedGroupId);

    
  return (
    <>
    {
        Object.values(groups).map((value, index) => (
            <div
                key={index}
                className=' flex border-b border-black pb-2 gap-[20px] items-center hover:opacity-60 cursor-pointer '
                onClick={() => {setSelectedGroupId(value.id)
                    props.setDisplay("chat")}}
            >
                <div>
                    <img src="./ai-generated-7715246.jpg" alt="" 
                        className=' w-[60px] h-[60px] rounded-full '
                    />
                </div>
                <div>
                    <p
                        className=' text-[16px] font-bold '
                    >
                        {value.groupName}
                    </p>
                    <p
                        className=' text-[14px] w-[120px] lg:w-[260px] truncate '
                    >
                        {value.lastMessage && value.lastMessage.message || value.lastMessage}
                    </p>
                </div>
            </div>
        ))
    }
    </>
  )
}

export default Group