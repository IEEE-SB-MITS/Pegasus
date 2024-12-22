import React, { useEffect } from "react";
import styles from "../../constants/style";
// import { motion, AnimatePresence } from 'framer-motion';
import { logo, ball, aboutusImg, mail, call, sideball } from "../../assets";
import Timeline from "../../constants/Timeline";
import ras from "../../assets/RAS CHAPTER.svg";
import keralasec from "../../assets/kerala-section.svg";
import crfid from "../../assets/rfid.svg";
import Marquee from "react-fast-marquee";

import { Link } from "react-router-dom";
import Myfooter from "../../constants/footer";
import { Main } from "../../sections/Main";
import Team from '../../sections/Team'
import Time from "../../sections/Time";
import About from '../../sections/About';
import Marquee1 from '../../constants/Marquee1';
import Marquee2 from '../../constants/Marquee2';
import PreEvents from "../../sections/PreEvents";
import Partners from '../../sections/Partners'


const Expo = () => {
  useEffect(() => {
    const myBtn = document.getElementById("maindiv");

    const mousemoveHandler = (e) => {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      myBtn.style.setProperty("--x", x + "deg");
    };

    if (myBtn) {
      myBtn.addEventListener("mousemove", mousemoveHandler);

      return () => {
        myBtn.removeEventListener("mousemove", mousemoveHandler);
      };
    }
  }, []);

  return (
    <div id="maindiv"  className="bg-[#020202]">
      <Main/>

      <About />

      <Marquee1/>
      <Marquee2/>

      <Time/>

      <section id="section4" className="min-h-screen">
        <div className="w-full flex flex-col justify-center items-center md:pt-10 ">
          <h1 className="text-2xl md:text-4xl font-bold font-BrunoAce">PRE EVENTS</h1>
        </div>
        <PreEvents/>
      </section> 
      
      <Partners/>
      
      <section id="section5">
        <div className="w-full flex flex-col justify-center items-center md:pt-10 pb-14">
          <h1 className="text-2xl md:text-4xl font-bold font-BrunoAce">CONTACT US</h1>
          <div className="lg:hidden text-md">( Tap the card to contact )</div>
        </div>
        <Team />
      </section>
      
      <section className={`h-[20vh]`}>
      </section>
      
      <Myfooter/>
    </div>
  );
};

export default Expo;
