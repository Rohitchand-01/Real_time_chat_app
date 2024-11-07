import React from 'react'
import power from '../assets/power.png';
import chat from '../assets/chat.png';
import menu from '../assets/menu.png';
import person from '../assets/person.png';
import setting from '../assets/setting.png';

const Sidebar = () => {
  return (
    <div className='w-[5%] h-full top-0 fixed  bg-indigo-500'>
      <div className='flex flex-col p-3'>
        <img className='mb-20 w-[50px]' src={power} alt="" />
        <img className='mb-4 w-[48px]' src={chat} alt="" />
        <img className='mb-4 w-[50px]' src={person} alt="" />
      </div>
      <div className='mt-[300px] flex flex-col p-3'>
        <img className='mb-4 w-[50px]' src={setting} alt="" />
        <img className='mb-4 w-[50px]' src={menu} alt="" />
      </div>
    </div>
  )
}

export default Sidebar
