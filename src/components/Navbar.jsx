import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between w-full items-center p-4 md:p-8 z-[100] absolute'>
        <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1>
        <div>
            <Link to='/signin'><button className='text-white cursor-pointer pr-4'>Sign In</button></Link>
            <Link to='/signup'><button className='bg-red-600 cursor-pointer text-white rounded px-6 py-2'>Sign Up</button></Link>
        </div>
    </div>
  )
}

export default Navbar