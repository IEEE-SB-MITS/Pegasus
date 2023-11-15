import React from 'react'


const Timeline = () => {
  return (
    <div className='h-full flex flex-col items-center w-full'>
        <div className='h-16 w-[80%] lg:w-1/4 md:w-1/4 bg bg-yellow-50 text-green-700  text-white font-normal flex flex-col justify-center  text-center p-1 my-3' style={{background: "rgba(31, 1, 32, 0.01)"}} id='event-div'><div className={` font-bold text-green-500 -m-1`}>4 Nov:</div> <div>Application starts</div></div>
        <div className='h-16 w-[80%] lg:w-1/4 md:w-1/4 bg bg-yellow-50 text-white font-normal flex flex-col justify-center  text-center p-1 my-3' style={{background: "rgba(31, 1, 32, 0.01)"}} id='event-div'><div className={` font-bold text-red-500 -m-1`}>16 Nov:</div> <div>Application Ends</div></div>
        <div className='h-18 md:h-20 w-[80%] lg:w-1/4 md:w-1/4 bg bg-yellow-50 text-white font-normal flex flex-col justify-center  text-center p-1 my-3' style={{background: "rgba(31, 1, 32, 0.01)"}} id='event-div'><div className={`font-bold text-red-500 -m-1`}>20 Nov:</div> <div>shortlisted teams announcement</div></div>
        <div className='h-16 w-[80%] lg:w-1/4 md:w-1/4 bg bg-yellow-50 text-white font-normal flex flex-col justify-center  text-center p-1 my-3' style={{background: "rgba(31, 1, 32, 0.01)"}} id='event-div'><div className={` font-bold text-red-500 -m-1`}>24 Nov:</div> <div>Event starts</div></div>
        <div className='h-16 w-[80%] lg:w-1/4 md:w-1/4 bg bg-yellow-50 text-white font-normal flex flex-col justify-center  text-center p-1 my-3' style={{background: "rgba(31, 1, 32, 0.01)"}} id='event-div'><div className={`font-bold text-red-500 -m-1`}>25 Nov:</div> <div>Event ends</div></div>
    </div>
  )
}

export default Timeline