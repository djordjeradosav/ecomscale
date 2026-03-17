import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="relative w-full bg-dark px-6 py-24 md:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-background md:text-5xl">
            Unlock Faster Growth.
          </h2>
          <p className="mt-4 font-data text-sm text-background/60 md:text-base">
            Partner with a 3PL built specifically for performance brands.
          </p>
        </div>

        <div className="mx-auto flex max-w-lg flex-col items-center justify-center rounded-[3rem] border border-background/10 bg-dark p-8 shadow-2xl md:p-12">
          <div className="flex w-full flex-col items-center text-center">
            <h3 className="font-heading text-2xl font-bold text-background">Enterprise Logistics</h3>
            <p className="mt-2 font-data text-sm text-background/60">
              End-to-end supply chain optimization from China to your global customers.
            </p>
            
            <ul className="mt-8 flex w-full flex-col gap-4 text-left">
              {[
                'Direct-from-source fulfillment',
                'Optimized packaging engineering',
                'Automated customs & clearance',
                'Dedicated account management'
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="font-heading text-sm text-background/80">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="group relative mt-12 flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-accent px-8 py-4 font-heading text-sm font-bold tracking-wide text-background transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Book a consultation <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 z-0 translate-y-[100%] rounded-full bg-background transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-y-0"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
