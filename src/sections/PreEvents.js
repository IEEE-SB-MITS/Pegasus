import ReactLenis from '@studio-freight/react-lenis'
import React, { useRef } from 'react'
import Card from '../constants/card'
import cardFront from '../assets/CardCover.png'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import inn from '.././assets/Instagram_46.png';
import mind from '.././assets/mindspark.png'
import esp from '.././assets/esp32.png'

const events = [
  {
    title: "INNOVISION",
    desc: "AI Video generating challenge",
    link: "https://bit.ly/InnovisionRegistration",
    poster: inn
  },
  {
    title: "MINDSPARK",
    desc: "Ideathon",
    link: "https://bit.ly/IEEEMindSpark",
    poster: mind
  },
  {
    title: "INTRO TO ESP32",
    desc: "By Govind S Nath",
    link: "https://bit.ly/IntroToESP",
    poster: esp
  },
]


gsap.registerPlugin(ScrollTrigger);

const PreEvents = () => {
  const container = useRef();
  const cardRefs = useRef([]);

  useGSAP(()=>{
    const cards = cardRefs.current;

    //flip card
    cards.forEach((card, index) =>{
      const frontEl = card.querySelector('.flip-card-front');
      const backEl = card.querySelector('.flip-card-back');

      const startOffset = 1/3 ;
      const endOffset = 2/3 ;

      ScrollTrigger.create({
        trigger: card,
        start: "top+=100 bottom",
        end: "center center",
        scrub: 1,
        id: `rotate-flip-${index}`,
        onUpdate: (self) =>{
          const progess = self.progress;
          if (progess >= startOffset && progess <=endOffset) {
            const animationProgress = (progess - startOffset)/ (1/3);
            const frontRotation = -180 * animationProgress;
            const backRotation = 180 - 180 * animationProgress;


            gsap.to(frontEl, {rotateY: frontRotation, ease: "power1.out"});
            gsap.to(backEl, {rotateY: backRotation, ease:"power1.out"});

          } 
        }
      })
    })


  },{scope: container})
  return (
    <ReactLenis root>
    <div ref={container} className='cards relative min-h-[500px] my-10 gap-10 md:gap-28'>
        {events.map((event,index) =>(
            <Card
            key={index}
            id={`card-${index+1}`}
            frontSrc={cardFront}
            frontAlt='Card image'
            title={event.title}
            desc={event.desc}
            link={event.link}
            poster = {event.poster}
            ref={(el)=>(cardRefs.current[index] = el)}
            />
        ))}
    </div>
    </ReactLenis>
  )
}

export default PreEvents