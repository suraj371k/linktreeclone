import React from 'react'
import Data from './ImageData'
const ImageCarousel = () => {
   

  return (
    <div className='overflow-hidden'>
         <div className='flex gap-x-4 animate-slide'>
            {
              Data.map((image) => (
                <div className='' key={image.id}>
                    <img src={image.img}/>
                </div>
              ))}
</div>
    </div>
  )
}

export default ImageCarousel