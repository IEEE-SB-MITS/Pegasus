import React from 'react'
import ras from "../assets/RAS CHAPTER.svg";
import keralasec from "../assets/kerala-section.svg";
import crfid from "../assets/rfid.svg";
import Marquee from "react-fast-marquee";

const Partners = () => {
  return (
    <section
    className={`md:h-screen h-1/4  flex  flex-col items-center`} id="section4"
  >
    <h1 className="event-heading">OUR PARTNERS</h1>

    <div className="relative h-full w-full px-10 md:p-0 lg:p-0 overflow-hidden">
      <div className="h-full w-full flex flex-col justify-center">
        <div className="flex flex-col md:flex-row  h-1/2 w-full items-center justify-center ">
          <div className="md:hidden lg:hidden ">
            <Marquee direction="left" speed="100">
              <img
                src={keralasec}
                alt="RAS LOGO"
                className="h-[50px] md:h-[30%] my-20 md:my-0 mx-7"
              />
              <img
                src={crfid}
                alt="IEEE Kerala section LOGO"
                className="h-[50px] md:h-[35%] my-20 md:my-0 mx-7"
              />
              <img
                src={ras}
                alt="CRFID LOGO"
                className="h-[35px] md:h-[30%] my-20 md:my-0 mx-7 md:hidden lg:hidden"
              />
            </Marquee>
          </div>
          <div className="hidden md:flex lg:flex h-full w-full md:justify-center md:items-center">
            <img
              src={keralasec}
              alt="RAS LOGO"
              className="h-[50px] md:h-[30%] my-20 md:my-0 mx-7"
            />
            <img
              src={crfid}
              alt="IEEE Kerala section LOGO"
              className="h-[50px] md:h-[35%] my-20 md:my-0 mx-7"
            />
            <img
              src={ras}
              alt="CRFID LOGO"
              className="h-[50px] md:h-[30%] my-20 md:my-0 mx-7 md:hidden lg:hidden"
            />
          </div>
        </div>
        <div className="hidden md:flex h-1/4 w-full items-start justify-center">
          <img src={ras} alt="CRFID LOGO" className="h-[20%] md:h-[30%]" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Partners