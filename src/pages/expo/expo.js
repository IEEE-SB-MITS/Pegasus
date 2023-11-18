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

const peopleData = [
  {
    img: "https://i.imgur.com/LQf0xXP.jpg",
    name: "Akshay Sanjeev",
    position: "chair",
    number: "9995979041",
    mail: "akshaysanjeev10@gmail.com",
  },
  {
    img: "https://i.imgur.com/jTL8hbW.jpg",
    name: "Ann Sara Baby",
    position: "secretary",
    number: "9400538729",
    mail: "annsarababy@ieee.org",
  },
  {
    img: "https://i.imgur.com/tbOJCZ9.jpg",
    name: "Karthik U",
    position: "Vice Chair",
    number: "8281628198",
    mail: "karthiku@ieee.org",
  },
];
const peopleDataExpo = [
  {
    img: "https://i.imgur.com/PIzBHKn.jpg",
    name: "MELVIN SABU",
    position: "coodinator",
    number: "96052 86714",
    mail: "someone@example.com",
  },

  {
    img: "https://i.imgur.com/EVdO7QK.jpg",
    name: "JOANNA MERINE NOBLE",
    position: "coodinator",
    number: "8137042277",
    mail: "someone@example.com",
  },
];
const peopleDataHack = [
  {
    img: "https://i.imgur.com/aGRNwvs.jpg",
    name: "bhagyaraj n",
    position: "Coordinator",
    number: "7510231478",
    mail: "brnbhagyaraj@gmail.com",
  },
  {
    img: "https://i.imgur.com/yfNIaCw.jpg",
    name: "parthiv s",
    position: "Coordinator",
    number: "8943462638",
    mail: "jane@example.com",
  },
];

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
      <section
        className={`h-screen ${styles.expoColor} z-10 flex flex-col items-center justify-center`}
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
            <div id="logo">
              <img src={logo} alt="logo" className="" />
            </div>
            <div id="text" className="text-center my-5">
              <h1 className="md:text-5xl text-3xl font-bold">
                EXPO{" "}
                <span className="text-red-500 flex md:inline-block md:flex-none justify-center">
                  &
                </span>{" "}
                HACKATHON
              </h1>
            </div>
            <p className="md:py-5"> REGISTER HERE </p>
            <div className="flex flex-col md:flex-row lg:flex-row">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeNyLyP_ZdXLlohgDXZWKi8IWcG7CXCWOUCbd-LENOscQIc-w/viewform?usp=sf_link"
                id="myRegBtn"
                className="m-6"
              >
                <i></i>
                <i></i>
                <span>EXPO</span>
              </a>
              <a
                // href="https://unstop.com/o/kgSuwrN?lb=IvoS6d15&utm_medium=Share&utm_source=shortUrl"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfLunQ7pHimLuQn3sS6I3Yc7E5IIqc7g3P5gi_mV3JpXMEByA/viewform"
                id="myRegBtn"
                className="m-6"
              >
                <i></i>
                <i></i>
                <span>HACK</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
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
      </section>
      <section
        className={`h-[150vh] ${styles.expoColor} animate-section relative`}
        id="section2"
      >
        <div className="h-full w-full flex flex-col md:flex-row md:justify-evenly justify-center items-center relative">
          <div id="left" className="w-1/2 ">
            <img
              src={aboutusImg}
              alt=""
              className="absolute md:h-[90%] lg:h-[90%] h-[30%] w-1/2  top-0 spinner"
            />
          </div>
          <div
            id="right"
            className="w-[65%] lg:w-1/2 md:w-1/2 h-full md:p-10 p-0 flex flex-col justify-center"
          >
            <h1 className="text-3xl font-bold text-center">
              About
              <br className="md:hidden lg:hidden" /> the Event
            </h1>
            <div className="my-6 md:px-6 px-0 md:text-lg text-sm text-justify">
              Introducing Pegasus 2.0, presented by 𝗜𝗘𝗘𝗘 𝗦𝗕 𝗠𝗜𝗧𝗦 in partnership
              with IEEE RAS Kerala Chapter and IEEE Council on RFID Kerala
              Section. Prepare for an exceptional project expo and Hackathon
              where the boundaries of innovation are pushed to the limit.
            </div>
            <Link
              to="https://drive.google.com/file/d/1AozPaKCcWnJ1RZVRXadF_htRIwFbVXUA/view?usp=drive_link"
            >
              <span className="text-[#d400d4] text-xl p-4 ">View Guidelines {'>>'}</span>
            </Link>
          </div>
        </div>
        {/* <div className="md:hidden lg:hidden absolute bottom-32 text-2xl text-pink-700 font-mono">
        <Marquee > -  DON'T FORGET TO REGISTER BEFORE 16TH NOVEMBER - 
          </Marquee>
          </div> */}
      </section>


      <section
        className={`h-screen ${styles.expoColor} ${styles.flexCenter} flex-col relative overflow-hidden`}
        id="section3"
      >
        <div className="text-5xl text-center font-[Georgia] md:mb-7 mb-20">
          TIMELINE
        </div>
        <div className="relative h-full w-full px-10 md:p-0 lg:p-0 ">
          <img
            src={sideball}
            alt=""
            className="hidden md:block lg:block absolute h-[40%] md:h-full lg:h-3/5 -top-5 -right-12 -rotate-45 "
          />
          <img
            src={sideball}
            alt=""
            className="hidden md:block lg:block absolute h-[40%] md:h-1/2 lg:h-[60%]  -left-10 bottom-0 "
          />
          <Timeline />
        </div>
      </section>
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
      <section
        className={`md:h-screen lg:h-[120vh] h-[360vh] ${styles.expoColor}`}
        id="section5"
      >
        <div>
          <div className="w-full flex flex-col justify-center items-center md:pt-10">
            <h1 className="text-4xl event-heading">Contact Us</h1>
            <div className="lg:hidden text-md">( Tap the card to contact )</div>
          </div>
          <div className="h-full w-full flex flex-col md:flex-row lg:flex-row items-center justify-center">
            {/* cards */}
            {peopleData.map((person, index) => (
              <ContactCard
                key={index}
                img={person.img}
                name={person.name}
                position={person.position}
                number={person.number}
                mail={person.mail}
              />
            ))}
          </div>
          <div className="h-full w-full flex flex-col md:flex-row lg:flex-row items-center justify-center">
            {/* cards */}

            <div className="md:hidden my-10 lg:hidden">
              -- EXPO COORDINATORS --
            </div>
            {peopleDataExpo.map((person, index) => (
              <ContactCard
                key={index}
                img={person.img}
                name={person.name}
                position={person.position}
                number={person.number}
                mail={person.mail}
              />
            ))}
            <div className="md:hidden my-10 lg:hidden">
              -- HACK COORDINATORS --
            </div>
            {peopleDataHack.map((person, index) => (
              <ContactCard
                key={index}
                img={person.img}
                name={person.name}
                position={person.position}
                number={person.number}
                mail={person.mail}
              />
            ))}
            <div className="card mx-10 my-3">
              <img src="https://i.imgur.com/hxLi7a4.jpg" className="card-img" alt="" />
              <div className="card-body p-4">
                <p className="card-sub-title w-1/2">Coordinator</p>
                <h1 className={` pt-4`}>
                  <span className="text-[45px] ">BASIL</span>{" "}
                  <span className="text-[1.85rem] font-normal capitalize">
                    THANKACHAN
                  </span>
                </h1>
                <div className="w-full h-full flex flex-row items-center justify-center">
                  <a
                    href={`tel:9562951685`}
                    className="card-button mx-4 py-4 w-[35%] flex items-center justify-center"
                  >
                    <img
                      src={call}
                      alt=""
                      className="w-[30%]"
                      style={{ filter: "invert(20)" }}
                    />
                  </a>
                  <a
                    href={`mailto:basilthankachan861@gmail.com`}
                    className="card-button mx-4 py-4 w-[35%] flex items-center justify-center"
                  >
                    <img
                      src={mail}
                      alt=""
                      className="w-[30%]"
                      style={{ filter: "invert(20)" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className={`h-[20vh] ${styles.expoColor}`}>

      </section>
    
    </div>
  );
};

export default Expo;
