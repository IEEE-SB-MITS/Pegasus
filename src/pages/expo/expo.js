import React, { useEffect } from "react";
import styles from "../../constants/style";
// import { motion, AnimatePresence } from 'framer-motion';
import {
  logo,
  ball,
//   aboutusImg,
  // person,
  call,
  mail,
  
  aboutusImg,
} from "../../assets";
import  chair  from "../../assets/akshay.jpg";
import  viceChair from "../../assets/vicechair.jpg";
import ann from "../../assets/annsara.jpg"
import joana from "../../assets/joana.jpg"
import BHAGYARAJ_N from "../../assets/BHAGYARAJ_N.jpg"
import ContactCard from "../../constants/card";
import parthiv from "../../assets/parhiv.jpg"
import Timeline from "../../constants/Timeline";

// import Globe from "../../common/globe";
// import Timeline from "../hack/timeline.js";

const timedata = [
  {
    eventname: "4th Nov: Application starting"
  },
  {
    eventname: "14th Nov: Application closint"
  },
  {
    eventname: "20th Nov: Shortlisting Results"
  },
  {
    eventname: "24th Nov: Event Starts"
  },
  {
    eventname: "25th Nov: Event ends"
  },
  {
    eventname: "4th Nov: Application starting"
  },

]

const peopleData = [
  {
    img: chair,
    name: 'Akshay Sanjeev',
    position: 'chair',
    number: '9995979041',
    mail: 'akshaysanjeev10@gmail.com',
  },
  {
    img: ann,
    name: 'Ann Sara Baby',
    position: 'secretary',
    number: '9400598729',
    mail: 'annsarababy@ieee.org',
  },
  

];
const peopleData1 = [
  {
    img: viceChair,
    name: 'Karthik U',
    position: 'EXPO event coodinator',
    number: '8281628198',
    mail: 'karthiku@ieee.org',
  },
 
  {
    img: joana,
    name: 'JOANNA MERINE NOBLE',
    position: 'EXPO event coodinator',
    number: '8137042277',
    mail: 'someone@example.com',
  },
  {
    img: BHAGYARAJ_N,
    name: 'bhagyaraj n',
    position: 'HACK event coodinator',
    number: '987-654-3210',
    mail: 'brnbhagyaraj@gmail.com',
  },
  {
    img: parthiv,
    name: 'parthiv s',
    position: 'HACK event coodinator',
    number: '8943462638',
    mail: 'jane@example.com',
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

  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up by removing the script when the component unmounts
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
            <div id="text" className="text-center my-3">
              <h1 className="text-6xl font-bold">EXPO</h1>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNyLyP_ZdXLlohgDXZWKi8IWcG7CXCWOUCbd-LENOscQIc-w/viewform?usp=sf_link" id="myRegBtn" className="m-6">
              <i></i>
              <i></i>
              <span>REGISTER</span>
            </a>
          </div>
        </div>
      </section>

      <section
        className={`h-screen ${styles.expoColor} animate-section`}
        id="section2"
      >
        <div className="h-full w-full flex flex-col md:flex-row md:justify-evenly justify-center items-center relative">
          <div id="left" className="w-1/2 " >
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
            <div className="my-6 md:px-6  md:text-xl text-sm text-justify">
            Introducing Pegasus 2.0, presented by 𝗜𝗘𝗘𝗘 𝗦𝗕 𝗠𝗜𝗧𝗦 in partnership with IEEE RAS Kerala Chapter and IEEE Council on RFID Kerala Section. Prepare for an exceptional project expo where the boundaries of innovation are pushed to the limit.
             {" "}
            </div>
          </div>
        </div>
      </section>





      
      <section className={`h-screen ${styles.expoColor} ${styles.flexCenter} flex-col relative`} id="section3">
        <div className="event-heading">TIMELINE</div>
        <Timeline eventname= "event starting"/>
      </section>
      {/* <section className="h-screen bg-yellow-900">
      <div 
              class="apply-button" 
              data-hackathon-slug="YOUR-HACKATHON-SLUG" 
              data-button-theme="light"
              style={{height: "44px", width: "312px"}}
            ></div>
      </section> */}
      <section
        className={`md:h-screen lg:h-screen h-[200vh] ${styles.expoColor}`}
        id="section5"
      >
        <div>
        <div className="w-full flex flex-col justify-center items-center md:pt-10">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <div className="lg:hidden text-xl">
            Tap the card to contact
          </div>
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
          {peopleData1.map((person, index) => (
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
      <section className={`h-[20vh] w-full ${styles.expoColor}`}   ></section>
    </div>
  );
};

export default Expo;
