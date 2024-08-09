import React from 'react'
import { PiLinktreeLogoFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className='flex justify-between mt-10 ml-40 px-8 py-6 
     rounded-full fixed bg-white w-[80vw] z-50 flex-wrap'>

        <div className='flex gap-x-20 pt-3 flex-wrap'>
          <div className='flex font-semibold'>
            <h2 className='text-3xl'>Linktree</h2>
            <PiLinktreeLogoFill className='text-3xl font-bold'/>
          </div>
          <div>
            <ul className='flex gap-x-10 text-xl mt-1 flex-wrap'>
              <li>Templates</li>
              <li>Marketplace</li>
              <li>Discover</li>
              <li>Pricing</li>
              <li>Learn</li>
            </ul>
          </div>
        </div>
        <div className='flex gap-x-10'>
          <button className='py-4 px-5 rounded-lg bg-slate-300'>Log in</button>
          <button className='bg-black text-white px-6 py-4 rounded-full'>Sign up free</button>
        </div>
    </div>
  )
}

export default Navbar