import React from 'react'
import styles from "../constants/style";
import { logo, ball, aboutusImg, mail, call, sideball } from "../assets";
import { Link } from 'react-router-dom';

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
        <h1 className="text-3xl font-bold text-center">
          About the Event
        </h1>
        <div className="my-6 md:px-6 px-0 md:text-lg text-sm text-justify">
          Introducing PEGASUS 3.0, the third edition of the flagship technical 
          event organized by IEEE SB MITS. This two-day fest promises an exciting blend 
          of workshops, a 24-hour hackathon, competitions, and technical sessions that foster 
          creativity, learning, and innovation. Prepare for an exceptional experience where talent 
          meets opportunity, pushing the boundaries of innovation to new heights.
        </div>
        <Link
          to="https://drive.google.com/file/d/1AozPaKCcWnJ1RZVRXadF_htRIwFbVXUA/view?usp=drive_link"
        >
          <span className="text-xl py-4 md:px-6 text-[#D71015] ">View Guidelines {'>>'}</span>
        </Link>
      </div>
    </div>
    {/* <div className="md:hidden lg:hidden absolute bottom-32 text-2xl text-pink-700 font-mono">
    <Marquee > -  DON'T FORGET TO REGISTER BEFORE 16TH NOVEMBER - 
      </Marquee>
      </div> */}
  </section>
  )
}

export default About