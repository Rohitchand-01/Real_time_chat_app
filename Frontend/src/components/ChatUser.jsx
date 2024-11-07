import React from 'react'
import person from '../assets/person.png';

const ChatUser = () => {
    return (
        <div>
            <div className="flex gap-5 items-center justify-center bg-slate-600 text-white p-1 hover:bg-slate-700 duration-300">
                <div className="w-[50px] rounded-full bg-black">
                    <img src={person} />
                </div>
                <div>
                    <h1 className=' text-lg font-semibold'>John doe</h1>
                    <span>Offline</span>
                </div>
            </div>
        </div>
    )
}

export default ChatUser
