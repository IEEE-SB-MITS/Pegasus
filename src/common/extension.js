import React from 'react'
import Marquee from 'react-fast-marquee'

const DateExtended = () => {
  return (
    <div className="flex flex-col pb-0 overflow-y-auto  radial sm:px-0 sm:w-full sm:overflow-x-hidden sm:scrollbar scrollbar overflow-x-hidden relative">
    <div className="  w-full text-xs  md:text-xl font-medium justify-center  text-black items-center bg-[#d400d4]/50 py-1 md:p-1/2 lg:p-1/2 flex">
      <Marquee speed={60}>
        <span className="text-white font-normal font-mono mx-10 md:mx-60">
          Registrations extended to 17th Nov.
        </span>
        <span className="text-white font-normal font-mono mx-10 md:mx-60">
          Registrations extended to 17th Nov.
        </span>
        <span className="text-white font-normal font-mono mx-10 md:mx-60">
          Registrations extended to 17th Nov.
        </span>
      </Marquee>
    </div>
  </div>
  )
}

export default DateExtended
