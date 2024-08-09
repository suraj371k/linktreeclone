import React from 'react'
import { PiLinktreeLogoFill } from "react-icons/pi";
import flag1 from '../assets/aboriginal-flag.webp';
import flag2 from '../assets/torres-strait-islander-flag.webp'


const Footer = () => {
  return (
    <div className='w-auto h-auto bg-[#4a2671] pt-32'>
        <div className='flex flex-col items-center pt-20'>
          <div>
          <h1 className='text-[4rem] font-bold text-center text-[#e0aaff] leading-none w-[50vw]'
          >Jupmstart your corner of the internet today</h1>
          </div>
          <div className='flex mt-10 gap-x-4'>
          <div>
            <input className='px-7 py-4 rounded-lg' type='url' placeholder='linktr.ee/yourname'/>
          </div>
          <div>
            <button className='px-7 py-4 rounded-full bg-[#bfd200]'>Claim your Linktree</button>
          </div>
          </div>
          <div className='bg-white w-[80vw] h-auto mt-52 rounded-xl'>
            <div className='flex justify-around'>
             <div>
                <h1 className='text-3xl font-semibold pb-7'>Company</h1>
                <ul className='text-[#5e5858] leading-8'>
                    <li><a href='#'>The Linktree Blog</a></li>
                    <li><a href='#'>Engineering Blog</a></li>
                    <li><a href='#'>Marketplace</a></li>
                    <li><a href='#'>What's New</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Press</a></li>
                    <li><a href='#'>Careers</a></li>
                    <li><a href='#'>Link in Bio</a></li>
                    <li><a href='#'>Social Good</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <div>
                    <button className='px-6 py-4 rounded-xl bg-slate-200 m-5'>Log in</button>
                    <button className='px-7 py-4 rounded-full bg-[#bfd200]'>Get started for free</button>
                </div>
             </div>
             <div>
               <h1 className='text-3xl font-semibold pb-7'>Community</h1>
               <ul className='text-[#5e5858] leading-8'>
                <li><a href='#'>Linktree for Enterprise</a></li>
                <li><a href='#'>2023 Creator Report</a></li>
                <li><a href='#'>2022 Creator Report</a></li>
                <li><a href='#'>Charities</a></li>
                <li><a href='#'>What's Trending</a></li>
                <li><a href='#'>Creator Profile Directory</a></li>
                <li><a href='#'>Explore Templatess</a></li>
               </ul>
             </div>
             <div>
              <h1 className='text-3xl font-semibold pb-7'>Support</h1>
              <ul className='text-[#5e5858] leading-8'>
                <li><a href='#'>Help Topics</a></li>
                <li><a href='#'>Getting Started</a></li>
                <li><a href='#'>Linktree Pro</a></li>
                <li><a href='#'>Feature & How-Tos</a></li>
                <li><a href='#'>FAQs</a></li>
                <li><a href='#'>Report a Violation</a></li>
              </ul>
             </div>
             <div>
                <h1 className='text-3xl font-semibold pb-7'>Trust & Legal</h1>
                <ul className='text-[#5e5858] leading-8'>
                    <li><a href='#'>Terms & Conditions</a></li>
                    <li><a href='#'>Privacy Notice</a></li>
                    <li><a href='#'>Cookie Notice</a></li>
                    <li><a href='#'>Trust Center</a></li>
                </ul>
                
                <div className='mt-52 mb-20'>
        <a  href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 m-5 rounded-full focus:outline-none focus:ring-gray-300 text-white  inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
            <div className="text-left rtl:text-right">
                <div className="mb-1 text-xs">Download on the</div>
                <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
            </div>
        </a>
        <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-full inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg className="me-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
            <div className="text-left rtl:text-right">
                <div className="mb-1 text-xs">Get in on</div>
                <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
            </div>
        </a>
        </div>

             </div>
          </div>
        </div>
        <div className='w-[80vw] h-[40vh] rounded-3xl bg-[#e2cfea] mt-10 flex justify-center
        items-center'>
            <h2 className='text-[14rem] font-semibold text-[#4a2671]'>
               Linktree
            </h2>
            <PiLinktreeLogoFill className='text-[14rem] text-[#4a2671]'/>
        </div>
        <div className='flex gap-x-10 mt-32'>

            <img src={flag1} width={100}/>
            <img src={flag2} width={120}></img>
          
        </div>
        <div className='w-[60vw] text-center mt-10 mb-10'>
                <p className='text-[#e2cfea] font-semibold'>
                We acknowledge the Traditional Custodians of the land on which our office 
                stands, The Wurundjeri people of the Kulin Nation, and pay our respects to 
                Elders past, present and emerging. Linktree Pty Ltd (ABN 68 608 721 562), 1-9 
                Sackville st, Collingwood VIC 3066

                </p>
            </div>
        </div>
      
    </div>
  )
}

export default Footer