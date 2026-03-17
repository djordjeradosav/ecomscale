import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax image
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Split text reveal manually since SplitText is a club plugin
      // We'll stagger the lines
      gsap.fromTo(
        '.split-line',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="philosophy" className="relative flex min-h-[90dvh] w-full items-center justify-center overflow-hidden bg-dark px-6 py-24 md:px-12">
      <div className="absolute inset-0 z-0">
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=2670&auto=format&fit=crop" 
          alt="Concrete texture" 
          className="h-[120%] w-full object-cover opacity-20 sepia-[.3] hue-rotate-[-30deg]"
        />
        <div className="absolute inset-0 bg-dark/80 mix-blend-multiply"></div>
      </div>

      <div ref={textRef} className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="overflow-hidden">
          <p className="split-line font-heading text-xl tracking-tighter text-background/60 md:text-3xl">
            Most 3PLs focus on: adding layers of management.
          </p>
        </div>
        <div className="mt-8 overflow-hidden md:mt-12">
          <p className="split-line font-drama text-5xl italic leading-tight text-background md:text-[6rem] lg:text-[7.5rem]">
            We focus on:
            <br />
            <span className="text-accent underline decoration-accent/30 underline-offset-[12px]">direct infrastructure.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
