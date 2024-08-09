import React, { useState } from 'react'
import TestimonialData from './TestimonialData'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


const Testimonial = () => {

    const [currentIndex , setCurrentIndex] = useState(0)

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % TestimonialData.length)
    }

    const handlePrev = () => {
        setCurrentIndex((currentIndex -1 + TestimonialData.length) % TestimonialData.length)
    }

  return (
    <div className='mt-10'>
        <div className='flex  flex-col items-center'>
            <div className='mb-10 mt-5'>
                <h1 className='text-[4rem] font-extrabold text-[#1f1e1e]'>As featured in...</h1>
            </div>
            <div className='mb-20'>
                <ul className='flex gap-x-20'>
                    <li className='px-36 py-7 bg-white rounded-full'>INSIDER</li>
                    <li className='px-36 py-7 bg-white rounded-full'>Mashabl</li>
                    <li className='px-36 py-7 bg-white rounded-full'>FORTUNE</li>
                    <li className='px-36 py-7 bg-white rounded-full'>Forbes</li>
                </ul>
            </div>
        </div>
    <div className='flex flex-col items-center'>
     <div>
        <img src={TestimonialData[currentIndex].image} width={850}/>
     </div>
     <div className='pt-16'>
        <h1 className='text-[3rem] font-extrabold text-center leading-none w-[850px]'>
            {TestimonialData[currentIndex].heading}</h1>
     </div>
     <div>
        <p className='pt-5'>{TestimonialData[currentIndex].name}</p>
     </div>
     <div>
        <p>{TestimonialData[currentIndex].position}</p>
     </div>
     <div className='flex gap-x-8 text-3xl pt-5 pb-20'>
     <FaArrowLeft 
     onClick={handlePrev}
      className='border-2 border-black w-12 h-12 hover:bg-black
     transition duration-500 rounded-lg hover:text-white' />
     <FaArrowRight
     onClick={handleNext}
      className='border-2 border-black w-12 h-12 hover:bg-black
     transition duration-500 rounded-lg hover:text-white' />
     </div>
    </div>
    </div>
  )
}

export default Testimonial