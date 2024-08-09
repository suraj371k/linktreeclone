import React from 'react'
import test2 from '../assets/testimonial.jpg'
import { IoLogoInstagram } from "react-icons/io";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";




const HomePage2 = () => {
  return (
    <div className='bg-[#dac2e8] w-full h-screen flex pl-40 gap-x-40'>
               <div className='z-30 mt-[200px]'>
           <div className='bg-[white] w-[300px] h-[550px] rounded-2xl shadow-md
            shadow-black'>
           <div className='flex  pt-20 flex-col items-center'>
            <img className='rounded-full' src={test2} width={100}/>
           <div className='text-blue-900 w-full mt-5'>

            <button className='bg-[#e8e85b] w-full rounded-full text-centerpy-3 mb-3
            py-3'>
                Autumn Collection
            </button>
            
            <button className='bg-[#e8e85b] w-full rounded-full text-centerpy-3 mb-3 py-3'>
             Latest Additions
            </button>
            
            <button className='bg-[#e8e85b] w-full rounded-full text-centerpy-3 py-3'>
               Podcast
            </button>
            <div className='flex justify-center mt-5 gap-x-7'>
            <div>
            <IoLogoInstagram className='text-3xl' />
            </div>
            <div>
            <AiFillTikTok className='text-3xl'/>
            </div>
            <div>
            <FaLinkedin className='text-3xl'/>
</div>
            </div>
           </div>
           </div>
           </div>
           </div>
    <div className='pt-[300px] w-[40vw] leading-none text-[#572273]'>
        <h1 className='text-[4rem] font-bold'>Create and customize your Linktree in minutes</h1>
     <p className='text-xl pt-5'>
        Connect your TikTok, Instagram, Twitter, website, store, videos, music, 
        podcast, events and more. It all comes together in a link in bio landing
         page designed to convert.</p>
         <div className='pt-10'>
            <button className='px-9 py-5 bg-[#572273] text-white rounded-full'>
                Get started for free</button>
         </div>
    </div>
         
    </div>
  )
}

export default HomePage2