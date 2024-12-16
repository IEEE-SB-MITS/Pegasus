import React, { useEffect } from "react";
import styles from "../../constants/style";
// import { motion, AnimatePresence } from 'framer-motion';
import { logo, ball, aboutusImg, mail, call, sideball } from "../../assets";
import ContactCard from "../../constants/card";
import Timeline from "../../constants/Timeline";
import ras from "../../assets/RAS CHAPTER.svg";
import keralasec from "../../assets/kerala-section.svg";
import crfid from "../../assets/rfid.svg";
import Marquee from "react-fast-marquee";
import Govind from "./govind";
import Amrita from "./amrita";
import Quiz from "./quiz";
import { Link } from "react-router-dom";
import Myfooter from "../../constants/footer";
import { Main } from "../../sections/Main";
import Team from '../../sections/Team'
import Time from "../../sections/Time";
import About from '../../sections/About';
import backg from '../../assets/backg.png';


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
      {/* <section
        className={`h-[120vh] ${styles.expoColor} z-10   relative items-center justify-center`}
        id="sectionevent"
      >
        <div className={` flex justify-center text-3xl font-bold `}>
          {" "}
          Pre-Events{" "}
        </div>
        <div
          className={`h-full z-10  flex flex-col  md:flex-row gap-10 items-center  justify-center`}
        >
          <Govind />
          <Amrita />
          <Quiz/>
        </div>
      </section> */}

      <About />

      <Time/>
      
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
