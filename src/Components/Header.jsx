import {useRef , useEffect} from 'react'
import testimonialImage from '../assets/testimonial.jpg'


const Header = () => {

    const cardRef = useRef(null);
    const donateCardRef = useRef(null);
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const card = cardRef.current;
        const donateCard = donateCardRef.current;
  
        const cardRect = card.getBoundingClientRect();
        const donateCardRect = donateCard.getBoundingClientRect();
  
        const cardX = clientX - cardRect.left - cardRect.width / 2;
        const cardY = clientY - cardRect.top - cardRect.height / 2;
  
        const donateCardX = clientX - donateCardRect.left - donateCardRect.width / 2;
        const donateCardY = clientY - donateCardRect.top - donateCardRect.height / 2;
  
        card.style.transform = `rotateX(${cardY / 20}deg) rotateY(${cardX / 20}deg)`;
        donateCard.style.transform = `rotateX(${donateCardY / 20}deg) rotateY(${donateCardX / 20}deg)`;
      };
  
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
  return (
    <div className='bg-[#006400] w-full h-screen flex gap-x-32 relative flex-wrap'>
    <div className='flex flex-col pt-[320px] w-[48vw] ml-40 leading-none
    '>
        <div>
            <h1 className='text-[6rem] text-[#aacc00] font-extrabold'>
            Everything you are. In one, 
            simple link in bio.
            </h1>
     
        <p className='text-2xl pt-5 pb-5 text-[#aacc00]'>Join 50M+ people using Linktree for their link in bio. One link to help you
             share everything you create, curate and sell from your Instagram, TikTok, 
             Twitter, YouTube and other social media profiles.</p>
             <input className='py-5 px-6 rounded-lg' type='url'
             value='linktr.ee/yourname'/>
             <button className='px-9 py-5 bg-purple-300 rounded-full mx-5'>Claim your Linktree</button>
        </div>
    </div>
       <div className='mt-[300px] z-30 x' ref={cardRef}>
           <div className='bg-[#bfd200] w-[300px] h-[550px] rounded-2xl'>
           <div className='flex  pt-20 flex-col items-center'>
            <img className='rounded-full' src={testimonialImage} width={100}/>
         

            <p className='pt-5 font-semibold'> Pride Pals</p>
            <p>LGBTQ + safe spaces</p>
           <div className='text-blue-900 w-full mt-5'>

            <button className='bg-white w-full rounded-full text-centerpy-3 mb-3
            py-3'>
                Upcoming events
            </button>
            
            <button className='bg-white w-full rounded-full text-centerpy-3 mb-3 py-3'>
                Pride Pals blog
            </button>
            
            <button className='bg-white w-full rounded-full text-centerpy-3 py-3'>
               Support the cause
            </button>
           </div>
           </div>
           </div>
           </div>
              <div className='bg-white absolute w-[15rem] h-[10rem] flex flex-col items-center
               bottom-[10rem] left-[68rem] z-40 rounded-xl ' ref={donateCardRef}>
                <div className='pt-5' >
                    <h1>Support us</h1>
                </div>
                <div className='flex gap-x-8 pt-4'>
                    <div className='shadow-black shadow-sm px-3 py-1 rounded-lg'>
                 <p>$10</p>
                    </div>
                    <div className='shadow-black shadow-sm px-3 py-1 rounded-lg'>
                   <p>$25</p>
                    </div>
                    <div className='shadow-black shadow-sm px-3 py-1 rounded-lg'>
                   <p>$50</p>
                    </div>
                </div>
                <div className='pt-4'>
                    <button className='px-16 rounded-full py-3 bg-black text-white'>Donate</button>
                </div>
              </div>
          
     
    </div>
  )
}

export default Header