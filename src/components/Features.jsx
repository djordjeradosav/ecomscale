import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RefreshCw, Activity, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// --- Card 1: Diagnostic Shuffler ---
function ShufflerCard() {
  const [cards, setCards] = useState([
    { id: 1, text: "Direct-from-Source", sub: "Bypassing middlemen at origin" },
    { id: 2, text: "Reduced Handling", sub: "Faster factory-to-port transfer" },
    { id: 3, text: "Cash-to-Cycle Optimization", sub: "Accelerated inventory ROI" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newCards = [...prev];
        const last = newCards.pop();
        newCards.unshift(last);
        return newCards;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex h-64 w-full flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-dark/10 bg-background p-6 shadow-xl shadow-dark/5">
      <div className="absolute left-6 top-6 flex items-center justify-between w-[calc(100%-3rem)]">
        <RefreshCw className="text-accent" size={20} />
        <span className="font-data text-xs font-bold uppercase tracking-widest text-dark/40">Efficiency</span>
      </div>
      <div className="relative mt-8 h-32 w-full max-w-[240px]">
        {cards.map((card, index) => {
          // Calculate positions based on index: 0 is front, 1 is middle, 2 is back
          const isFront = index === 0;
          const translateY = index * 12;
          const scale = 1 - index * 0.05;
          const zIndex = 10 - index;
          const opacity = 1 - index * 0.3;

          return (
            <div
              key={card.id}
              className="absolute left-0 right-0 rounded-2xl border border-dark/5 bg-white p-4 shadow-lg transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
              style={{
                transform: `translateY(${translateY}px) scale(${scale})`,
                zIndex,
                opacity,
              }}
            >
              <h4 className="font-heading text-sm font-bold text-dark">{card.text}</h4>
              <p className="mt-1 font-data text-[10px] text-dark/60">{card.sub}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-auto pt-4 text-center">
        <h3 className="font-heading text-lg font-bold">Direct-from-Source</h3>
        <p className="mt-1 text-balance font-data text-xs text-dark/60">Eliminate middlemen. Factory floor to global shipping lanes, faster.</p>
      </div>
    </div>
  );
}

// --- Card 2: Telemetry Typewriter ---
function TypewriterCard() {
  const [text, setText] = useState('');
  const fullText = "Analyzing margin optimization... Local labor cost verified. Integrated shipping rates applied. Cost-per-order reduced. Reinvesting savings into marketing.";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        // Reset after delay
        setTimeout(() => {
          setText('');
          i = 0;
        }, 4000);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="relative flex h-64 w-full flex-col rounded-[2rem] border border-dark/10 bg-dark p-6 shadow-xl shadow-dark/10">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 animate-pulse rounded-full bg-accent"></div>
          <span className="font-data text-xs font-bold uppercase tracking-widest text-background/60">Live Feed</span>
        </div>
        <Activity className="text-background/40" size={20} />
      </div>
      
      <div className="mt-4 flex-1 overflow-hidden font-data text-xs leading-relaxed text-background/80">
        <p className="whitespace-pre-wrap">
          <span className="text-accent">&gt;</span> root@ecomscale:~# status
          <br/>
          {text}
          <span className="ml-[2px] inline-block h-3 w-2 animate-pulse bg-accent align-middle"></span>
        </p>
      </div>

      <div className="mt-auto border-t border-background/10 pt-4 text-center">
        <h3 className="font-heading text-lg font-bold text-background">Competitive Margin</h3>
        <p className="mt-1 text-balance font-data text-xs text-background/60">Lower cost-per-order. Reinvest savings to unlock faster growth.</p>
      </div>
    </div>
  );
}

// --- Card 3: Cursor Protocol Scheduler ---
function SchedulerCard() {
  const gridContainer = useRef(null);
  const cursorRef = useRef(null);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      
      // Starting position (outside)
      tl.set(cursorRef.current, { x: 50, y: 150, opacity: 0 });
      
      // Enter
      tl.to(cursorRef.current, { x: 100, y: 70, opacity: 1, duration: 1, ease: 'power2.inOut' });
      
      // Click pressing simulation
      tl.to(cursorRef.current, { scale: 0.9, duration: 0.1 });
      tl.to('.day-cell-3', { backgroundColor: '#E63B2E', color: '#F5F3EE', duration: 0.2 }, '<');
      tl.to(cursorRef.current, { scale: 1, duration: 0.1 });
      
      // Move to next cell
      tl.to(cursorRef.current, { x: 140, y: 70, duration: 0.6, ease: 'power2.inOut', delay: 0.3 });
      tl.to(cursorRef.current, { scale: 0.9, duration: 0.1 });
      tl.to('.day-cell-4', { backgroundColor: '#E63B2E', color: '#F5F3EE', duration: 0.2 }, '<');
      tl.to(cursorRef.current, { scale: 1, duration: 0.1 });
      
      // Move to ship button
      tl.to(cursorRef.current, { x: 120, y: 120, duration: 0.8, ease: 'power2.inOut', delay: 0.3 });
      tl.to(cursorRef.current, { scale: 0.9, duration: 0.1 });
      tl.to('.ship-btn', { scale: 0.95, duration: 0.1 }, '<');
      tl.to(cursorRef.current, { scale: 1, duration: 0.1 });
      tl.to('.ship-btn', { scale: 1, duration: 0.1 }, '<');
      
      // Exit and reset cells
      tl.to(cursorRef.current, { x: 200, y: 180, opacity: 0, duration: 0.8, ease: 'power2.in' });
      tl.to(['.day-cell-3', '.day-cell-4'], { backgroundColor: 'transparent', color: '#111111', duration: 0.5 }, '>-0.4');

    }, gridContainer);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative flex h-64 w-full flex-col rounded-[2rem] border border-dark/10 bg-background p-6 shadow-xl shadow-dark/5" ref={gridContainer}>
      <div className="absolute left-6 top-6 flex items-center justify-between w-[calc(100%-3rem)]">
        <Calendar className="text-accent" size={20} />
        <span className="font-data text-xs font-bold uppercase tracking-widest text-dark/40">Infrastructure</span>
      </div>

      <div className="relative mt-8 flex w-full flex-col items-center justify-center">
        <div className="flex gap-1.5 rounded-xl border border-dark/5 bg-white p-2 shadow-sm">
          {days.map((day, i) => (
            <div 
              key={i} 
              className={`day-cell-${i} flex h-8 w-8 items-center justify-center rounded-lg font-data text-[10px] font-bold transition-colors`}
            >
              {day}
            </div>
          ))}
        </div>
        <div className="ship-btn mt-4 rounded-lg bg-dark px-4 py-1.5 font-data text-xs text-background">
          Route Logistics
        </div>
        
        {/* Animated Custom Cursor SVG */}
        <div ref={cursorRef} className="pointer-events-none absolute left-0 top-0 z-10 w-6">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 3.21L19.5 10.74C20.48 11.27 20.25 12.75 19.16 12.98L13.82 14.1L10.38 18.96C9.72 19.89 8.22 19.53 8.08 18.41L5.5 3.21Z" fill="#111111"/>
            <path d="M5.5 3.21L19.5 10.74C20.48 11.27 20.25 12.75 19.16 12.98L13.82 14.1L10.38 18.96C9.72 19.89 8.22 19.53 8.08 18.41L5.5 3.21Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className="mt-auto pt-4 text-center">
        <h3 className="font-heading text-lg font-bold">Scalable Global</h3>
        <p className="mt-1 text-balance font-data text-xs text-dark/60">Heavy lifting of international logistics. Scale without overhead.</p>
      </div>
    </div>
  );
}

export default function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.feature-card',
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.15, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={containerRef} className="w-full bg-background px-6 py-24 md:px-12 lg:py-32 z-10 relative">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center font-heading text-3xl font-bold tracking-tight text-dark md:text-5xl">
          Functional Edge.
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="feature-card">
            <ShufflerCard />
          </div>
          <div className="feature-card">
            <TypewriterCard />
          </div>
          <div className="feature-card">
            <SchedulerCard />
          </div>
        </div>
      </div>
    </section>
  );
}
