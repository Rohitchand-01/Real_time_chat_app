import React from 'react'
import person from '../assets/person.png';

const User = () => {
    return (
        <div className='flex px-4 py-1 hover:bg-indigo-400 duration-300 cursor-pointer rounded-lg mt-3 '>
            <div className=' rounded-full bg-slate-800'>
                <img className='w-[50px]' src={person} alt="" />
            </div>
            <div className='ml-4'>
                <p>John Doe</p>
                <span>john.doe@example.com</span>
            </div>
        </div>
    )
}

export default User
