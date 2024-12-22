import React from 'react'
import styles from "../constants/style";
import { ball, aboutusImg, mail, call, sideball } from "../assets";
import Timeline from '../constants/Timeline';

const Time = () => {
    return(
        <section
        className={`min-h-screen ${styles.flexCenter} flex-col relative overflow-hidden mb-28`}
        id="section3"
      >
        <div className="text-3xl md:text-4xl text-center font-BrunoAce font-bold md:mb-10 mb-10">
          TIMELINE
        </div>
        <div className="relative h-full w-full px-10 md:px-0 lg:p-0 ">
          <Timeline/>
        </div>
      </section>
    )
}

export default Time