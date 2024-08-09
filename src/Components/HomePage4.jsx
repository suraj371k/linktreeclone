import React, { useEffect, useState } from 'react';
import earth from '../assets/earth.jpeg';
import headphone from '../assets/headphone.webp';
import { CiBadgeDollar } from "react-icons/ci";
import graph from '../assets/bar-graph.webp';
import ImageCarousel from './ImageCarousel';
import Testimonial from './Testimonial';

const HomePage4 = () => {

  const texts = [
    "athletes", "streamers", "vloggers", "fitness coaches",
    "ecommerce sellers", "retailers", "products", "wellness leaders", 
    "musicians", "bands", "DJs", "podcasters", "fashion designers", "culture creators"
  ];

  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval); 
  }, [texts.length]);

  return (
    <div className='w-full h-auto bg-[#edede9]'>
      <div className='w-full h-auto flex items-center pb-40 pt-52'>
        <div className='w-[40vw] ml-40 flex flex-col'>
          <div className='flex w-[50vw] items-center gap-x-5'>
            <div className='bg-blue-900 w-[300px] h-[200px] rounded-3xl flex justify-around items-center'>
              <img className='rounded-full' src={earth} width={100} alt="Earth" />
              <div className='text-[#bfd200]'>
                <p>New York, USA</p>
                <p className='text-center text-3xl font-semibold p-4'>79</p>
                <p className='text-center'>Views</p>
              </div>
            </div>
            <div className='bg-[#c2c5aa] w-[150px] h-[200px] rounded-3xl'>
              <div className='flex flex-col items-center pt-10 gap-y-3'>
                <CiBadgeDollar className='text-4xl font-bold' />
                <p className='text-3xl'>237</p>
                <p className='font-bold'>Donations</p>
              </div>
            </div>
          </div>
          <div className='flex gap-x-5 mt-5'>
            <div className='bg-[#dbb42c] w-[150px] h-[200px] rounded-3xl'>
              <div className='flex flex-col items-center pt-10 gap-y-3'>
                <img className='rounded-full' src={headphone} width={100} alt="Headphone" />
                <p className='text-3xl text-[#7b2cbf]'>345</p>
                <p className='font-bold text-[#7b2cbf]'>Plays</p>
              </div>
            </div>
            <div className='bg-[#656d4a] w-[300px] h-[200px] rounded-3xl flex justify-around items-center'>
              <img src={graph} width={150} alt="Graph" />
              <div className='text-[#bfd200]'>
                <p>432</p>
                <p className='text-center'>New Subscribers</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mr-40'>
          <h1 className='text-[4rem] leading-none font-extrabold'>
            Analyze your audience and keep your followers engaged
          </h1>
          <p className='pt-5 text-xl'>
            Track your engagement over time, monitor revenue, and learn what’s 
            converting your audience. Make informed updates on the fly to keep 
            them coming back.
          </p>
          <button className='px-9 py-5 bg-[#cdb4db] rounded-full mt-7'>
            Get started for free
          </button>
        </div>
      </div>
      <div>
        <div className='flex flex-col items-center'>
          <h1 className='text-[4rem] font-extrabold'>
            The only link in bio trusted by 50M+
          </h1>
          <p className='animate-fade text-[4rem] text-[#531cb3] font-bold'>
            {texts[currentText]}
          </p>
        </div>
        <ImageCarousel/>
        <Testimonial/>
      </div>
    </div>
  );
};

export default HomePage4;
