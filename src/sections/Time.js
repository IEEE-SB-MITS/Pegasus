import React from 'react'
import styles from "../constants/style";
import { ball, aboutusImg, mail, call, sideball } from "../assets";
import Timeline from '../constants/Timeline';

const Time = () => {
    return(
        <section
        className={`h-screen ${styles.flexCenter} flex-col relative overflow-hidden `}
        id="section3"
      >
        <div className="text-5xl text-center font-BrunoAce font-bold md:mb-10 mb-20">
          TIMELINE
        </div>
        <div className="relative h-full w-full px-10 md:px-0 lg:p-0 ">
          {/* <img
            src={sideball}
            alt=""
            className="hidden md:block lg:block absolute h-[40%] md:h-full lg:h-3/5 -top-5 -right-12 -rotate-45 "
          />
          <img
            src={sideball}
            alt=""
            className="hidden md:block lg:block absolute h-[40%] md:h-1/2 lg:h-[60%]  -left-10 bottom-0 "
          /> */}
          <Timeline/>
        </div>
      </section>
    )
}

export default Time