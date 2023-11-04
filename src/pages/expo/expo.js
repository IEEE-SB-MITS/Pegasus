import React, { useEffect } from "react";
import styles from "../../constants/style";
// import { motion, AnimatePresence } from 'framer-motion';
import { logo, ball, aboutusImg } from "../../assets";
import chair from "../../assets/akshay.jpg";
import viceChair from "../../assets/vicechair.jpg";
import ann from "../../assets/annsara.jpg";
import joana from "../../assets/joana.jpg";
import BHAGYARAJ_N from "../../assets/BHAGYARAJ_N.jpg";
import ContactCard from "../../constants/card";
import basil from "../../assets/basil.jpg"

import parthiv from "../../assets/parhiv.jpg";
import Timeline from "../../constants/Timeline";
import devfolio from "../../assets/Devfolio/Devfolio_Logo-White.svg";
import replit from "../../assets/Replit/logo-light-text-bg.svg";
import polygon from "../../assets/Polygon/Polygon_Logo-White.svg";

// import Globe from "../../common/globe";
// import Timeline from "../hack/timeline.js";

const peopleData = [
  {
    img: chair,
    name: "Akshay Sanjeev",
    position: "chair",
    number: " ",
    mail: "akshaysanjeev10@gmail.com",
  },
  {
    img: ann,
    name: "Ann Sara Baby",
    position: "secretary",
    number: "9400598729",
    mail: "annsarababy@ieee.org",
  },
];
const peopleDataExpo = [
  {
    img: viceChair,
    name: "Karthik U",
    position: "EXPO event coodinator",
    number: "8281628198",
    mail: "karthiku@ieee.org",
  },

  {
    img: joana,
    name: "JOANNA MERINE NOBLE",
    position: "EXPO event coodinator",
    number: "8137042277",
    mail: "someone@example.com",
  },

];
const peopleDataHack = [
  {
    img: BHAGYARAJ_N,
    name: "bhagyaraj n",
    position: "HACK event coodinator",
    number: "7510231478",
    mail: "brnbhagyaraj@gmail.com",
  },
  {
    img: parthiv,
    name: "parthiv s",
    position: "HACK event coodinator",
    number: "8943462638",
    mail: "jane@example.com",
  },
  {
    img: basil,
    name: "basil thankachan",
    position: "HACK event coodinator",
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

    // Load the Devfolio script here
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
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
                THE EXPO{" "}
                <span className="text-red-500 flex md:inline-block md:flex-none justify-center">
                  &
                </span>{" "}
                HACKATHON
              </h1>
            </div>
            <p>REGISTER HERE</p>
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
              href="https://unstop.com/o/fz90XMt?lb=IvoS6d15"
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
        className={`h-screen ${styles.expoColor} animate-section`}
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
            className="w-1/2 h-full md:p-10 p-0 flex flex-col justify-center"
          >
            <h1 className="text-3xl font-bold text-center">About the Event</h1>
            <div className="my-6 md:px-6 px-0 md:text-lg text-sm text-justify">
              Introducing Pegasus 2.0, presented by 𝗜𝗘𝗘𝗘 𝗦𝗕 𝗠𝗜𝗧𝗦 in partnership
              with IEEE RAS Kerala Chapter and IEEE Council on RFID Kerala
              Section. Prepare for an exceptional project expo where the
              boundaries of innovation are pushed to the limit.{" "}
            </div>
          </div>
        </div>
      </section>

      <section
        className={`h-screen ${styles.expoColor} ${styles.flexCenter} flex-col relative`}
        id="section3"
      >
        <div className="event-heading mb-10">TIMELINE</div>
        <Timeline />
      </section>
      <section
        className={`h-screen ${styles.expoColor} flex  flex-col items-center`}
      >
        <h1 className="event-heading">OUR SPONSORS</h1>
        <div className="relative h-full w-full px-10 md:p-0 lg:p-0 overflow-hidden">
          <img
            src={ball}
            alt=""
            className="absolute h-[40%] md:h-full lg:h-3/5 -top-5 -right-12 spinner"
          />
          <img
            src={ball}
            alt=""
            className="absolute h-[40%] md:h-1/2 lg:h-[60%]  -left-10 bottom-4 spinner"
          />
          <div className="h-full w-full flex flex-col justify-center">
            <div className="flex flex-col md:flex-row  h-1/2 w-full items-center justify-center">
              <img
                src={devfolio}
                alt="DEVFOLIO LOGO"
                className="h-[10%] md:h-[20%] my-7 md:my-0 mx-7"
              />
              <img
                src={replit}
                alt="REPLIT LOGO"
                className="h-[15%] md:h-[28%] my-7 md:my-0 mx-7"
              />
            </div>
            <div className="flex h-1/4 w-full items-start justify-center">
              <img
                src={polygon}
                alt="POLYGON LOGO"
                className="h-[20%] md:h-[40%]"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`md:h-screen lg:h-screen h-[200vh] ${styles.expoColor}`}
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

            <div className="md:hidden lg:hidden">-- EXPO COORDINATORS --</div>
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
            <div className="md:hidden lg:hidden">-- HACK COORDINATORS --</div>
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
          </div>
        </div>
      </section>
      <section className={`h-[20vh] w-full ${styles.expoColor}`}></section>
    </div>
  );
};

export default Expo;
