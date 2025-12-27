import React from "react";
import ISHRAE from "../assets/ISHRAE.png";
import logo from '../assets/logo/mitsnew.png'

const Partners = () => {
  return (
    <section id="section6" className="relative flex flex-col gap-20 mb-36">
      <div className="w-full flex flex-col justify-center items-center md:pt-10 ">
        <h1 className="font-ITCMedium text-3xl md:text-5xl tracking-wide font-bold -mb-10">
          OUR PARTNERS
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={logo}   // put college logo in public folder
          alt="Mar Athanasius College of Engineering"
          className="w-[180px] md:w-[320px] opacity-90"
        />
      </div>
    </section>
  );
};

export default Partners;
