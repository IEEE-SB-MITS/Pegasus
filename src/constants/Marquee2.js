import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './marquee.css'

const Marquee2 = () => {
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);

  useEffect(() => {
    
    let currentScroll = 0;
    let isScrollingDown = true;
    gsap.registerPlugin(ScrollTrigger); 

    const marqueeParts = marqueeRef.current.querySelectorAll('.marqueePart');

    // Apply the animation to all .marqueePart elements
    const tween = gsap.to(marqueeParts, {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: 'linear',
    //   stagger: 0.5, // Adds a delay between each element's animation start
    });

    gsap.set(marqueeInnerRef.current,  {xPercent: -50});


    const handleScroll = () => {
      if(window.scrollY > currentScroll) isScrollingDown = true;
      else isScrollingDown = false;

    tween.timeScale(isScrollingDown? 1: -1);

    currentScroll = window.scrollY;
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);
  

  return (
    <main className="marquee mb-40  -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 font-Dirtyline text-[60px] sm:text-[70px] md:text-[80px] lg:text-[100px]" ref={marqueeRef}> 
     {/* style={{marginTop: 'clamp(-48px,-5px,-64px)'}} */}
      <div className="marqueeInner" ref={marqueeInnerRef}>
        <div className="marqueePart">
          pegasus 3.0
<h3 className='px-5'>-</h3>        </div>

        <div className="marqueePart">
          pegasus 3.0 <h3 className=''>-</h3>

        </div>

        <div className="marqueePart">
          pegasus 3.0 <h3 className='px-5'>-</h3>

        </div>

        <div className="marqueePart">
          pegasus 3.0 <h3 className='px-5'>-</h3>

        </div>

        <div className="marqueePart">
          pegasus 3.0 <h3 className='px-5'>-</h3>

        </div>

        <div className="marqueePart">
          pegasus 3.0 <h3 className='px-5'>-</h3>

        </div>
      </div>
    </main>
  );
};

export default Marquee2;
