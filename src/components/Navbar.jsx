import React from 'react'

function Navbar() {
  return (
    <nav className='flex flex-col lg:flex-row justify-between mx-6 py-3 mb-10'>
        <div>
            <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0,16)}</h3>
            <h1 className='text-2xl font-bold'>Addy Food</h1>
        </div>
        <div>
            <input type="search"
            className='p-3 border border-gray-400 rounded-lg w-full lg:w-[25vw]'
            name='Search' 
            placeholder='Search Here'
             />
        </div>
    </nav>
  )
}

export default Navbar