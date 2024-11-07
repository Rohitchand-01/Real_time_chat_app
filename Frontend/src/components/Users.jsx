import React from 'react'
import User from './User'

const Users = () => {
    return (
        <div>
            <h1 className='bg-indigo-300 px-12 py-3 rounded-lg font-semibold text-2xl font-serif mt-2 '> Messages</h1>
            <div className=' overflow-y-auto flex-1 ' style={{maxHeight:"calc(100vh - 10vh)"}}>
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
                <User />
            </div>
        </div>
    )
}

export default Users
