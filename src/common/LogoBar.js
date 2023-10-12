import React from 'react'
import muthootLogo from '../assets/muthoot_logo.png';
import cslogo  from '../assets/CS white.png';
import raslogo from '../assets/ras-white.png';
import wielogo from '../assets/IEEE_WIE_White.png';
import ieeelogo from '../assets/ieee-logo.png';


const LogoBar = () => {
  return (
    <div className=' pt-5 w-screen text-xl h-1/4   flex justify-around'>
    {/* add ../assets/muthoot_logo.png this image */}
    <img src={ieeelogo} alt="Muthoot Logo" className="w-[7%] h-1/5 mx-auto" />
    <img src={raslogo} alt="Muthoot Logo" className="w-[7%] h-1/6 mx-auto" />
    <img src={muthootLogo} alt="Muthoot Logo" className="w-[15%] h-1/5 mx-auto" />
    <img src={wielogo} alt="Muthoot Logo" className="w-[4%] h-1/6 mx-auto" />
    <img src={cslogo} alt="Muthoot Logo" className="w-1/12 h-1/5 mx-auto" />

    </div>
  )
}

export default LogoBar