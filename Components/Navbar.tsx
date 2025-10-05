import React from 'react'

const Navbar = () => {
  return (
    <nav className='p-5 bg-gray-800 shadow-md flex justify-between items-center text-white'>
        <div className='flex items-center gap-2'>
            <img src="logo.png" alt="logo" height={40} width={40} />
            <h1 className='text-3xl font-bold'>InformatIQ</h1>
        </div>
        <ul className='flex gap-4 text-lg'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar
