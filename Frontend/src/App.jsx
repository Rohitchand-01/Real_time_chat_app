import React from 'react'
import Left from './components/Left'
import Right from './components/Right'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <div className='flex'>
        <Sidebar />
        <Navbar />
      </div>
      <div className='flex w-full h-screen'>
        <Left />
        <Right />
      </div>
    </div>
  )
}

export default App
