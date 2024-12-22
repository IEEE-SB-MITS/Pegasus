import ReactLenis from '@studio-freight/react-lenis'
import React, { useRef } from 'react'
import Card from '../constants/Card'
import cardFront from '../assets/CardCover.png'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

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

      const staggerOffset = index * 0.1;
      const startOffset = 1/3 + staggerOffset;
      const endOffset = 2/3 + staggerOffset;

      ScrollTrigger.create({
        trigger: card,
        start: "top bottom",
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
    <div ref={container} className='cards relative min-h-[500px]'>
        {[...Array(1)].map((_,index) =>(
            <Card
            key={index}
            id={`card-${index+1}`}
            frontSrc={cardFront}
            frontAlt='Card image'
            backText='Card Info'
            ref={(el)=>(cardRefs.current[index] = el)}
            />
        ))}
    </div>
    </ReactLenis>
  )
}

export default PreEvents