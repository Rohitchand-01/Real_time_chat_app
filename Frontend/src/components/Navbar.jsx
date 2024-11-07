import React from 'react'
import search from '../assets/search.svg';
import account from '../assets/account.png';

const Navbar = () => {
    return (
        <div className='h-[10vh]'>
            <div className='w-full h-16 ml-[5%] shadow-lg shadow-slate-400 flex'>
            <div className=''>
                <img className=' top-[18px] pl-5 absolute' src={search} alt="" />
                <input className='w-[400px] border pl-9 border-gray-600 p-1 m-3 rounded-full' type="text" placeholder='Search content, message or option here' />
            </div>
            <div className='bg-indigo-500 w-full ml-[700px] p-2 pl-20 flex gap-28'>
                 <h1 className=' text-white font-bold pt-2'>username</h1>
                 <img className='w-12' src={account} alt="" />
            </div> 
        </div>  
        </div>
    )
}

export default Navbar
