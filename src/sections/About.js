import React from 'react'
import styles from "../constants/style";
import { logo, ball, aboutusImg, mail, call, sideball } from "../assets";
import { Link } from 'react-router-dom';

const About = () => {
  return(
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
  )
}

export default About