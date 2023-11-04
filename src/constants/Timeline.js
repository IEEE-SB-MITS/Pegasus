import React from 'react'

const date = new Date();

const eventDates = {
  date1: new Date('04-11-23'),
  date2: new Date('14-11-23'),
  date3: new Date('20-11-23'),
  date4: new Date('24-11-23'),
  date5: new Date('25-11-23')
}

const Timeline = () => {
  return (
    <div className='h-full flex flex-col items-center w-full'>
        <div className='h-16 w-[80%] lg:w-1/4 md:w-1/4 bg bg-yellow-50 text-white font-normal flex flex-col justify-center  text-center p-1 my-3' style={{background: "rgba(31, 1, 32, 0.01)"}} id='event-div'><div className={`${eventDates.date1 <= date ? 'text-green-500' : 'text-red-500'} font-bold -m-1`}>4 Nov:</div> <div>Application starts</div></div>
        <div className='h-16 w-[80%] lg:w-1/4 md:w-1/4 bg bg-yellow-50 text-white font-normal flex flex-col justify-center  text-center p-1 my-3' style={{background: "rgba(31, 1, 32, 0.01)"}} id='event-div'><div className={`${eventDates.date2 <= date ? 'text-green-500' : 'text-red-500'} font-bold -m-1`}>14 Nov:</div> <div>Application Ends</div></div>
        <div className='h-18 md:h-20 w-[80%] lg:w-1/4 md:w-1/4 bg bg-yellow-50 text-white font-normal flex flex-col justify-center  text-center p-1 my-3' style={{background: "rgba(31, 1, 32, 0.01)"}} id='event-div'><div className={`${eventDates.date3 <= date ? 'text-green-500' : 'text-red-500'} font-bold -m-1`}>20 Nov:</div> <div>shortlisted teams announcement</div></div>
        <div className='h-16 w-[80%] lg:w-1/4 md:w-1/4 bg bg-yellow-50 text-white font-normal flex flex-col justify-center  text-center p-1 my-3' style={{background: "rgba(31, 1, 32, 0.01)"}} id='event-div'><div className={`${eventDates.date4 <= date ? 'text-green-500' : 'text-red-500'} font-bold -m-1`}>24 Nov:</div> <div>Event starts</div></div>
        <div className='h-16 w-[80%] lg:w-1/4 md:w-1/4 bg bg-yellow-50 text-white font-normal flex flex-col justify-center  text-center p-1 my-3' style={{background: "rgba(31, 1, 32, 0.01)"}} id='event-div'><div className={`${eventDates.date5 <= date ? 'text-green-500' : 'text-red-500'} font-bold -m-1`}>25 Nov:</div> <div>Event ends</div></div>
    </div>
  )
}

export default Timeline