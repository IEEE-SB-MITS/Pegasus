import React from 'react'
import './events.css'

const Card = ({title, desc, speaker, date, time, link, poster,closedRegistrations}) => {
  return (
    <div className='event-card'>
      <div className='event-poster'>
        <img src={poster} alt={title} />
      </div>
      
      <div className='event-info'>
        <h3 className='event-title font-ITCMedium'>{title}</h3>
        <p className='event-desc font-ProductSans'>{desc}</p>
        
        <div className='event-meta'>
          {speaker && (
            <div className='meta-item'>
              <span className='meta-label font-ProductSans'>Speaker:</span>
              <span className='meta-value font-ProductSans'>{speaker}</span>
            </div>
          )}
          
          {date && (
            <div className='meta-item'>
              <span className='meta-label font-ProductSans'>Date:</span>
              <span className='meta-value font-ProductSans'>{date}</span>
            </div>
          )}
          
          {time && (
            <div className='meta-item'>
              <span className='meta-label font-ProductSans'>Time:</span>
              <span className='meta-value font-ProductSans'>{time}</span>
            </div>
          )}
        </div>
        
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <button className={`register-btn ${closedRegistrations ? "register-btn-closed" : ""} font-ProductSans`} disabled={closedRegistrations}>
            {closedRegistrations ? "REGISTRATION CLOSED" : "REGISTER NOW"}
          </button>
        </a>
      </div>
    </div>
  )
}

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