import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Positioning",
    desc: "Placing your 3PL directly at the manufacturing source.",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-anim-1">
        <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" strokeDasharray="4 8" className="origin-center animate-[spin_20s_linear_infinite]" />
        <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="4" />
        <path d="M50 50L80 20" stroke="currentColor" strokeWidth="2" />
        <circle cx="80" cy="20" r="4" fill="#E63B2E" />
      </svg>
    )
  },
  {
    num: "02",
    title: "Elimination",
    desc: "Removing intermediary ports and handling stages.",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-anim-2">
        <rect x="20" y="20" width="60" height="60" stroke="currentColor" strokeWidth="2" />
        <path d="M20 50H80" stroke="#E63B2E" strokeWidth="4" className="scanner-line absolute" />
        <circle cx="35" cy="35" r="2" fill="currentColor" />
        <circle cx="65" cy="35" r="2" fill="currentColor" />
        <circle cx="35" cy="65" r="2" fill="currentColor" />
        <circle cx="65" cy="65" r="2" fill="currentColor" />
      </svg>
    )
  },
  {
    num: "03",
    title: "Acceleration",
    desc: "Routing goods globally with structural precedence.",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-anim-3">
        <path d="M10 50 L30 50 L40 20 L60 80 L70 50 L90 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ekg-path" />
        <circle cx="90" cy="50" r="4" fill="#E63B2E" className="ekg-dot" />
      </svg>
    )
  }
];

export default function Protocol() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      // Pinning container
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${cards.length * 100}%`,
        pin: true,
        // Optional scrub for smooth stacking
      });

      cards.forEach((card, i) => {
        if (i === 0) return; // Skip first card
        
        gsap.to(cards[i - 1], {
          scale: 0.9,
          opacity: 0.5,
          filter: "blur(20px)",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top 20%",
            scrub: true,
            // When trigger (next card) comes into view, scale down previous
          }
        });
      });

      // SVG animations
      gsap.to('.scanner-line', {
        y: 60,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut"
      });

      gsap.fromTo('.ekg-path', 
        { strokeDasharray: 300, strokeDashoffset: 300 },
        { strokeDashoffset: 0, duration: 2, repeat: -1, ease: "linear" }
      );
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full bg-background overflow-hidden">
      {steps.map((step, i) => (
        <div 
          key={i}
          className="protocol-card absolute inset-0 flex h-full w-full items-center justify-center p-6 md:p-12 bg-background"
          style={{ zIndex: i }}
        >
          <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-12 rounded-[3rem] border border-dark/10 bg-white p-8 shadow-2xl md:grid-cols-2 md:p-20">
            {/* SVG Graphic Side */}
            <div className="flex aspect-square w-full max-w-md items-center justify-center rounded-[2rem] bg-dark/5 p-12 text-dark">
              {step.svg}
            </div>
            
            {/* Text Side */}
            <div className="flex flex-col justify-center">
              <span className="font-data text-xl font-bold text-accent">{step.num}</span>
              <h3 className="mt-4 font-heading text-4xl font-bold tracking-tight text-dark md:text-6xl md:leading-[1.1]">
                {step.title}
              </h3>
              <p className="mt-6 font-data text-sm leading-relaxed text-dark/70 md:text-base">
                {step.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
