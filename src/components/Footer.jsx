import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-[-2rem] flex flex-col items-center justify-center rounded-t-[4rem] bg-dark px-6 py-12 pt-24 text-background md:px-12 lg:py-24 z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-24">
          <div className="md:col-span-2">
            <h2 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">EcomScale</h2>
            <p className="mt-4 max-w-sm font-data text-sm text-background/60">
              Unlock faster growth with our China-based 3PL built for brands.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="font-data text-xs font-bold uppercase tracking-widest text-background/40">Platform</h4>
            <a href="#" className="group flex items-center gap-2 font-heading tracking-tight text-background/80 transition-colors hover:text-accent">
              Methodology <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a href="#" className="group flex items-center gap-2 font-heading tracking-tight text-background/80 transition-colors hover:text-accent">
              Infrastructure <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a href="#" className="group flex items-center gap-2 font-heading tracking-tight text-background/80 transition-colors hover:text-accent">
              Case Studies <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-data text-xs font-bold uppercase tracking-widest text-background/40">Company</h4>
            <a href="#" className="group flex items-center gap-2 font-heading tracking-tight text-background/80 transition-colors hover:text-accent">
              About Us <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a href="#" className="group flex items-center gap-2 font-heading tracking-tight text-background/80 transition-colors hover:text-accent">
              Careers <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a href="#" className="group flex items-center gap-2 font-heading tracking-tight text-background/80 transition-colors hover:text-accent">
              Contact <ArrowUpRight size={14} className="opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-between border-t border-background/10 pt-8 md:flex-row">
          <p className="font-data text-xs text-background/40">
            © {new Date().getFullYear()} EcomScale Operations. All rights reserved.
          </p>
          
          <div className="mt-4 flex items-center gap-2 rounded-full border border-background/10 bg-background/5 px-4 py-1.5 md:mt-0">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
            <span className="font-data text-[10px] font-bold uppercase tracking-widest text-background">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
