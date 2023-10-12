import React from "react";
import LogoBar from "../common/LogoBar";
import logo from "../assets/newpega.png";
import cloud_left from "../assets/cloud-left.png";
import cloud_right from "../assets/cloud-right.png";
import Marquee from "react-fast-marquee";
import '../App.css';
import { motion } from "framer-motion";

const Homepage = () => {
  const handleExpoClick = () => {
    console.log("Expo Clicked");
  };
  return (
    <div>
      {/* border-black opacity-100 bg-opacity-25 shadow-md hover:shadow-xl */}
      <LogoBar />
      <div className="flex h-full px-10 mx-auto relative">
        <div className="absolute lg:h-[85vh] h-[90vh] lg:w-[95%] w-[85%] mt-5  flex justify-center items-center flex-col " >
          <div className=" bg-slate-400 opacity-10  h-full w-full absolute top-0 left-0 rounded-3xl flex z-10 ">
            
         
          </div>
            <img src={cloud_left} alt="" className="absolute lg:left-0 left-0 top-0 opacity-40 z-0 lg:h-[90%]"/>
            <img src={cloud_right} alt="" className="absolute lg:right-0 -right-1  top-0  opacity-40 z-0 lg:h-[90%]"/>
               <img src={logo} alt="logo" className="h-[50vw] lg:h-[60%] lg:w-1/2 relative z-30" /> 
                <div className="flex w-full justify-around flex-col lg:flex-row">
                  <motion.div className="bg-gradient-to-l from-[#480A27] to-transparent  z-50 h-full p-5  my-5 w-full text-center text-5xl lg:ml-5 lg:mr-2 rounded-3xl font-[Neptune]"
                   onClick={handleExpoClick}   whileHover={{ scale: 1.1,  }}
                   whileTap={{
                     scale: 0.8,}}
                  >
                    Expo
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }}
                   whileTap={{
                     scale: 0.8,}} className="bg-gradient-to-r from-[#1F0120] to-transparent z-50 h-full p-5 my-5 w-full text-center align-middle text-5xl lg:ml-2 lg:mr-5 rounded-3xl font-[Neptune]">
                    Hack
                  </motion.div>
                </div>
                

                <div className="marquee-container">
            <Marquee className="mt-10 text-4xl font-[Neptune] opacity-70">
                10TH & 11TH November... Fasten your belts for the most awaited event of the year...
                <i className="fa fa-th-list" aria-hidden="true"></i>
            </Marquee>
        </div>
                
        </div>

      </div>
    </div>
  );
};

export default Homepage;
