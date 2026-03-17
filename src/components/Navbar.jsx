import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      // Morph when scrolled past 100px roughly
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    // Initial entrance anim
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.5 }
    );

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 z-50 flex w-full justify-center px-4">
      <nav 
        ref={navRef}
        className={`flex items-center gap-8 rounded-full px-6 py-3 transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          isScrolled 
            ? 'border border-dark/10 bg-background/80 text-dark backdrop-blur-xl shadow-lg shadow-dark/5' 
            : 'border border-transparent bg-transparent text-dark'
        }`}
      >
        <a href="#" className="font-heading text-lg font-bold tracking-tight">
          EcomScale
        </a>
        
        <div className="hidden items-center gap-6 md:flex">
          <a href="#features" className="group font-data text-xs uppercase tracking-wider transition-transform hover:-translate-y-[1px]">
            Platform
            <span className="block h-[1px] w-0 bg-current transition-all group-hover:w-full"></span>
          </a>
          <a href="#philosophy" className="group font-data text-xs uppercase tracking-wider transition-transform hover:-translate-y-[1px]">
            Method
            <span className="block h-[1px] w-0 bg-current transition-all group-hover:w-full"></span>
          </a>
        </div>

        <button className={`group relative flex items-center justify-center overflow-hidden rounded-full px-5 py-2.5 font-heading text-xs font-bold tracking-wide transition-transform duration-500 hover:scale-105 ${
          isScrolled ? 'bg-dark text-background' : 'bg-accent text-background'
        }`}>
          <span className="relative z-10 transition-colors group-hover:text-background">Join</span>
          <span className="absolute inset-0 z-0 translate-y-[100%] rounded-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-y-0"></span>
        </button>
      </nav>
    </div>
  );
}
