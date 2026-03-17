import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered fade-up for hero parts
      gsap.fromTo(
        '.hero-reveal',
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.08, 
          ease: 'power3.out',
          delay: 0.2
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative flex h-[100dvh] w-full flex-col justify-end overflow-hidden px-6 pb-24 md:px-12 lg:pb-32"
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-dark">
        <img 
          src="https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?q=80&w=2787&auto=format&fit=crop" 
          alt="Concrete structure"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
      </div>

      <div className="max-w-5xl">
        <h1 className="flex flex-col gap-2">
          {/* Preset C Hero line pattern: [Direct verb] the (Bold Sans) / [System noun]. (Massive Serif Italic) */}
          <span className="hero-reveal font-heading text-4xl font-bold tracking-tighter text-dark md:text-5xl lg:text-7xl">
            Scale the
          </span>
          <span className="hero-reveal font-drama text-6xl italic leading-[0.8] tracking-tighter text-dark md:text-[8rem] lg:text-[11rem]">
            supply chain.
          </span>
        </h1>
        
        <p className="hero-reveal mt-8 max-w-xl font-heading text-lg leading-relaxed text-dark/80 md:text-xl">
          EcomScale — Unlock faster growth with our China-based 3PL built for brands.
        </p>

        <div className="hero-reveal mt-12 flex">
          <button className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-accent px-8 py-4 font-heading text-sm font-bold tracking-wide text-background transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Book a consultation <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </span>
            <span className="absolute inset-0 z-0 translate-y-[100%] rounded-full bg-dark transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-y-0"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
