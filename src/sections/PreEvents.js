import React from 'react'
import Card from '../constants/card'
import secure_web from '../../src/assets/posters/secure_web.jpeg'
import build_and_beyond from '../../src/assets/posters/build_and_beyond.jpeg'
import chatgpt_work from '../../src/assets/posters/how_does_chatgpt_work.jpeg'
import ml_civil from '../../src/assets/posters/ml_civil.jpeg'

const events = [
  {
    title: "SECUREWEB",
    desc: "Web Application Security & OWASP Top 10",
    speaker: "Andrew C Anil, Cybersecurity Analyst",
    date: "3rd January, 2026",
    time: "8:00 PM - 9:00 PM",
    link: "https://forms.gle/CZKeUQGkooDxKQ9n6",
    poster: secure_web,
    closedRegistrations: true
  },
  {
    title: "BUILD AND BEYOND",
    desc: "High-energy prototyping session: turning ideas into real solutions",
    speaker: "Muhammed Shan",
    date: "December 29, 2025",
    time: "2:00 PM - 3:00 PM",
    link: "https://forms.gle/5K17hyrdh2fF6KpcA",
    poster:  build_and_beyond,
    closedRegistrations: true
  },
  {
    title: "HOW DOES CHATGPT WORK",
    desc: "Building Intelligent LLMs",
    speaker: "Emil Biju, Applied Scientist, Microsoft USA",
    date: "December 20, 2025",
    time: "10:00 AM - 11:00 AM",
    link: "https://forms.gle/rrCWZMXmiVr2pbpE8",
    poster:  chatgpt_work,
    closedRegistrations: true
  },
  {
    title: "Machine Learning in Civil",
    desc: "How machine learning is reshaping civil engineering",
    speaker: "Joel Basil Kurian, MD, Supe AI",
    date: "January 13, 2026",
    time: "10:00 AM - 12:00 PM",
    link: "https://forms.gle/rrCWZMXmiVr2pbpE8",
    poster:  ml_civil,
    closedRegistrations: true
  },
]


const PreEvents = () => {
  return (
    <div className='py-12 px-4'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl font-bold font-ITCMedium tracking-wide mb-4'>
          <span className='text-red-600'>PRE</span> EVENTS
        </h1>
        <p className='text-gray-400 text-lg font-ProductSans'>Join us for these exciting pre-events before the main hackathon</p>
      </div>
      
      <div className='flex flex-wrap justify-center gap-8 max-w-10xl mx-auto'>
        {events.map((event, index) => (
          <Card
            key={index}
            title={event.title}
            desc={event.desc}
            speaker={event.speaker}
            date={event.date}
            time={event.time}
            link={event.link}
            poster={event.poster}
            closedRegistrations={event.closedRegistrations}
          />
        ))}
      </div>
    </div>
  )
}

export default PreEvents