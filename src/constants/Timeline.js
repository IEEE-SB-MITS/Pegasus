import React, { useEffect, useRef } from 'react'
import './events.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../assets/pooja.jpg'
const time = [
  {
    id: 1,
    title: 'Application Starts',
    date: '17 Dec'
  },
  {
    id: 2,
    title: 'Application Ends',
    date: '29 Dec'
  },
  {
    id: 3,
    title: 'Shortlisted Teams Announcement',
    date: ''
  },
  {
    id: 4,
    title: 'Event Starts',
    date: '10 Jan'
  },
  {
    id: 5,
    title: 'Event Ends',
    date: '11 Jan'
  }
]

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const elements = gsap.utils.toArray('.timeline-event');

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );


    });
  }, []);
  
  return (
    <section>
        <div className='timeline' ref={timelineRef}>
          <div className='timeline-line'/>
              {time.map((event, index)=> (
                <div key={index} className='timeline-event w-[80%] lg:w-1/4 md:w-1/2 rounded-xl'>
                  <div className='timeline-event-content text-center w-full text-[#D71015] font-ProductSans'>
                    <h2 className='font-bold'>{event.date}</h2>
                    <h3 className='font-semibold text-lg text-black'>{event.title}</h3>
                  </div>
                  {index < time.length -1 && <div className='timeline-connector'/>}
                </div>
              ))

              }
        </div>
    </section>
  )
}

export default Timeline






