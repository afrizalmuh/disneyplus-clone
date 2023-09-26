import React from 'react'
import { SLIDER_VIEWERS } from '../dummyData'

const Viewers = () => {
  return (
    <div className=' mt-8 pt-8 pb-6 gap-5 md:gap-6 justify-center grid grid-cols-1 md:grid-cols-5'>
      {SLIDER_VIEWERS.map((item, key) => 
        <div key={key}>
          <div className='relative rounded-lg overflow-hidden cursor-pointer border-2 hover:scale-[1.07] duration-500'>
            <img src={item.pathImage} alt={item.name} className='w-15 h-15 absolute block ease-in-out' />
            <video autoPlay={true} loop={true} playsInline={true} muted className='w-full h-full z-0 opacity-0 hover:opacity-100'>
              <source src={item.pathVideo} type='video/mp4' /> 
            </video>
          </div>  
        </div>
      )}
    </div>
  )
}

export default Viewers