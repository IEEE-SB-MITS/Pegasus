import React, { forwardRef, useState } from 'react'
import './events.css'

const Card = forwardRef(({id,frontAlt,frontSrc,title,desc,link,poster},ref) => {
  return (
    <div className='rcard hover:scale-105 ease-in-out transition-all duration-500'  id={id} ref={ref}>
        <div className='card-wrapper'>
            <div className='flip-card-inner'>
                <div className='flip-card-front'>
                    <img className='cardImage'
                    src={frontSrc}
                    width={500}
                    height={500}
                    alt={frontAlt}
                    loading='eager'
                    />
                </div>
                <div className='flip-card-back flex flex-col gap-2'>
                    <div className='h-2/3'>
                        <img src={poster} className='h-full w-full object-contain rounded-md'></img>
                    </div>
                    <div className=' text-center'>
                        <h2 className='text-[#030202] text-2xl font-semibold font-mono'>{title}</h2>
                        <p className='text-[#030202] text-sm font-ProductSans'>{desc}</p>
                        
                        <a href={link} target='_blank'>
                        <button type="submit"  className="mt-2 px-4 py-1 font-bold group bg-transparent text-[#D71015] border border-black rounded-xl hover:bg-[#B40E13] hover:text-[#030202] active:scale-90 transition-all duration-300 ease-in-out" >
                        <span className="text-md font-bold" style={{WebkitTextStroke: '0.5px #000000'}}>REGISTER NOW</span>
                        </button>
                        </a>

                    </div>
                </div>
            </div>  
        </div>
    </div>
  )
});

export default Card


// const Card = ({id,frontAlt,frontSrc,backText}) => {
//     return (
//       <div className='rcard' id={id} >
//           <div className='card-wrapper'>
//               <div className='flip-card-inner'>
//                   <div className='flip-card-front'>
//                       <img className='cardImage'
//                       src={frontSrc}
//                       width={500}
//                       height={500}
//                       alt={frontAlt}
//                       loading='eager'
//                       />
//                   </div>
//                   <div className='flip-card-back'>
//                       <div className=' text-center relative w-full h-full flex flex-col justify-center items-center'>
//                           <h2 className='text-[#030202] text-3xl font-semibold font-mono'>INNOVISION</h2>
//                           <p className='text-[#030202]/80 text-sm'>AI Video generating challenge</p>
//                           <p>Theme:</p>
//                           <p> Future Technology</p>
//                           <a href='https://bit.ly/InnovisionRegistration' target='_blank'>
//                           <button type="submit"  className="absolute bottom-2 left-2 px-4 py-1 font-bold group bg-transparent text-[#D71015] border border-black rounded-xl hover:bg-[#B40E13] hover:text-[#030202] active:scale-90 transition-all duration-300 ease-in-out" >
//                           <span className="text-md font-bold" style={{WebkitTextStroke: '0.5px #000000'}}>REGISTER NOW</span>
//                           </button>
//                           </a>
  
//                       </div>
//                   </div>
//               </div>  
//           </div>
//       </div>
//     )
//   };
  
//   export default Card