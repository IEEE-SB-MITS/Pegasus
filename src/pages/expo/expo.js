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
import About from '../../sections/About'


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
    <div id="maindiv">
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

      <section
        className={`md:h-screen h-1/4 ${styles.expoColor} flex  flex-col items-center`} id="section4"
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
      
      <section className={` ${styles.expoColor}`} id="section5">
        <div className="w-full flex flex-col justify-center items-center md:pt-10 pb-14">
          <h1 className="text-4xl event-heading">Contact Us</h1>
          <div className="lg:hidden text-md">( Tap the card to contact )</div>
        </div>
        <Team />
      </section>
      

      <section className={`h-[20vh] ${styles.expoColor}`}>
      </section>
      
      <Myfooter/>
    </div>
  );
};

export default Expo;
