import React from 'react'
import ISHRAE from "../assets/ISHRAE.png";

const Partners = () => {
  return (
  <section id="section6" className="flex flex-col gap-20 mb-24 -mt-10">
    <div className="w-full flex flex-col justify-center items-center md:pt-10 ">
      <h1 className="text-2xl md:text-4xl font-bold font-BrunoAce">OUR PARTNERS</h1>
    </div>
    <div className='flex justify-center items-center'>
      < img
        src={ISHRAE}
        alt="RAS LOGO"
        className="h-20 md:h-24"
      />
    </div>
  </section> 
  )
}

export default Partners
