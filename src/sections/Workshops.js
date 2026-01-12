import React from 'react'
import Card from '../constants/card'
import intro_robotics from '../../src/assets/posters/mobile_robot.jpeg'

const workshops = [
  {
    title: "INTRODUCTION TO ROBOTICS",
    desc: "Hands-on Mobile Robotic Development Workshop by Inker Robotics",
    speaker: "Inker Robotics, IEEE RAS SBC MITS",
    date: "30th January, 2026",
    time: "9:00 AM - 4:00 PM",
    link: "https://pegasus.ieeesbmits.in/",
    poster: intro_robotics,
    closedRegistrations: false
  }
]

const Workshops = () => {
  return (
    <div className='py-12 px-4'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-bold font-ITCMedium tracking-wide mb-4'>
          WORKSHOPS
        </h1>
        <p className='text-gray-400 text-lg font-ProductSans'>Enhance your skills with our hands-on workshop sessions</p>
      </div>
      
      <div className='flex flex-wrap justify-center gap-8 max-w-10xl mx-auto'>
        {workshops.map((workshop, index) => (
          <Card
            key={index}
            title={workshop.title}
            desc={workshop.desc}
            speaker={workshop.speaker}
            date={workshop.date}
            time={workshop.time}
            link={workshop.link}
            poster={workshop.poster}
            closedRegistrations={workshop.closedRegistrations}
          />
        ))}
      </div>
    </div>
  )
}

export default Workshops
