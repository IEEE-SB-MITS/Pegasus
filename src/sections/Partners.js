import React from "react";
import Marquee from "react-fast-marquee";

import logo from "../assets/logo/mitsnew.png";
import logo1 from "../assets/logo/ieeesbwhite.png";
import logo2 from "../assets/logo/ieee.png";

const Partners = () => {
  return (
    <section id="section6" className="relative flex flex-col items-center gap-16 mb-10 md:mt-28">

      {/* Desktop View */}
      <div className="justify-evenly items-center w-full py-16 hidden md:flex px-4">
        <img src={logo2} alt="IEEE" className="w-[180px] opacity-90" />
        <img src={logo1} alt="IEEE SB" className="w-[120px] opacity-90" />
        <img src={logo} alt="MITS" className="w-[260px] opacity-90" />
      </div>

      {/* Mobile View */}
      <div className="w-full md:hidden">
        <Marquee speed={50} gradient={false} className="py-10">
          <div className="flex items-center gap-20">
            <img src={logo2} alt="IEEE" className="h-10 w-auto opacity-90 px-4 pl-16" />
            <img src={logo1} alt="IEEE SB" className="h-20 w-auto opacity-90 px-4" />
            <img src={logo} alt="MITS" className="h-20 w-auto opacity-90 px-4" />
          </div>
        </Marquee>
      </div>

    </section>
  );
};

export default Partners;
