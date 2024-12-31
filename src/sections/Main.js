import React from 'react'
import { ball } from "../assets";
import logo from '../assets/p3.png'
import backg from '../assets/backg.png'

export const Main = () => {
  return (
    <section
    className={`h-screen bg-[#020202] z-10 flex flex-col items-center justify-center bg-contain bg-center`}
    style={{ backgroundImage: `url(${backg})` }}
    id="section1"
  >
    <div className="relative h-full w-full px-10 md:p-0 lg:p-0 overflow-hidden">
      <img
        src={ball}
        alt=""
        className="absolute h-2/6 md:h-full lg:h-3/5  -left-12 spinner"
      />
      <img
        src={ball}
        alt=""
        className="absolute h-2/6 md:h-1/2 lg:h-1/2  -right-24 bottom-4 spinner"
      />
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div id="logo"  className='mt-10'>
          <img src={logo} alt="logo" className="h-[180px] md:h-[320px] object-contain"  />
        </div>
        <div id="text" className="text-center mb-5 -mt-10">
          <h1 className="md:text-5xl text-3xl font-bold font-BrunoAce">HACKATHON</h1>
        </div>

        <h1 className='py-5 font-BrunoAce text-white md:text-2xl text-center' style={{WebkitTextStroke: '0.5px #D71015'}}>THEME : INCLUSIVE TECHNOLOGIES AND INNOVATION</h1>
        <a href='https://registration.ieeesbmits.in'>
        <div className='flex py-4 p-2 col-span-2'>
         <button type="submit"  disabled className="relative px-4 md:px-12 py-3 font-bold group bg-[#D71015] rounded-xl hover:bg-[#B40E13]  transition-all duration-300 ease-in-out disabled:bg-[#767575] disabled:opacity-80 disabled:cursor-not-allowed"   style={{
        boxShadow: "2px 2px 0px rgba(255, 255, 255, 0.7)", // Bottom-right shadow with no blur
        }}>
           <span className="relative text-xl md:text-2xl text-white" style={{WebkitTextStroke: '1px #000000'}}>REGISTRATIONS CLOSED</span>
         </button>
        </div>
        </a>
        <a href='https://registration.ieeesbmits.in/login' className='text-white'>Already Registered? <span className='text-[#D71015]'>Login</span></a>
      </div>
    </div>
  </section>
  )
}
