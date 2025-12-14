import React from 'react'
import styles from "../constants/style";
import { logo, ball, aboutusImg, mail, call, sideball } from "../assets";

const About = () => {
  return(
    <section
    className={`h-[120vh] animate-section relative`}
    id="section2"
  >
    <div className="h-full w-full flex flex-col md:flex-row md:justify-evenly justify-center items-center relative">
      <div id="left" className="w-1/2 ">
        <img
          src={aboutusImg}
          alt=""
          className="absolute md:h-[90%] lg:h-[90%] h-[30%] w-2/5  top-0 spinner"
        />
      </div>
      <div
        id="right"
        className="w-[65%] md:w-3/5 h-full md:p-10 p-0 flex flex-col justify-center"
      >
        <h1 className="text-2xl md:text-5xl font-bold font-ITCMedium tracking-wide">
          ABOUT THE EVENT
        </h1>
        <div className="my-6  px-0 md:text-lg text-sm text-justify md:pr-20">
          Introducing PEGASUS 4.0, the fou edition of the flagship technical 
          event organized by IEEE SB MITS. This two-day fest promises an exciting blend 
          of workshops, a 24-hour hackathon, competitions, and technical sessions that foster 
          creativity, learning, and innovation. Prepare for an exceptional experience where talent 
          meets opportunity, pushing the boundaries of innovation to new heights.
        </div>
      </div>
    </div>
  </section>
  )
}

export default About