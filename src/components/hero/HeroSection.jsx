import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WorkbenchScene from '../3d/WorkbenchScene';
import { Navbar } from '../layout/Navbar';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HeroSection() {
  const containerRef = useRef();
  const scrollHintRef = useRef();
  const canvasRef = useRef();
  const [introFinished, setIntroFinished] = useState(false);

  useGSAP(() => {
    // 1. Fade out initial scroll hint
    gsap.to(scrollHintRef.current, {
      opacity: 0,
      y: 20,
      scrollTrigger: {
        trigger: '#intro-3d-scroll-area',
        start: 'top top',
        end: '15% top',
        scrub: true,
      },
    });

    // 2. Fade in 3D Canvas
    gsap.fromTo(canvasRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8, ease: 'power2.out' });

    // 3. Monitor Zoom Transition: As camera pushes into monitor screen, fade 3D Canvas out
    ScrollTrigger.create({
      trigger: '#intro-3d-scroll-area',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        // As scroll approaches 80%-100%, fade 3D canvas out into the HTML portfolio
        if (p > 0.78) {
          const fadeOpacity = Math.max(0, 1 - (p - 0.78) / 0.18);
          if (canvasRef.current) {
            canvasRef.current.style.opacity = fadeOpacity.toString();
          }
          if (p >= 0.95) {
            setIntroFinished(true);
          } else {
            setIntroFinished(false);
          }
        } else {
          if (canvasRef.current) {
            canvasRef.current.style.opacity = '1';
          }
          setIntroFinished(false);
        }
      },
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative bg-[#F3F1EC] text-[#111111]">
      {/* Production Top Navbar */}
      <Navbar />

      {/* Full-Screen 3D Intro Canvas (Active during scroll through door to monitor) */}
      <div 
        ref={canvasRef} 
        className={`fixed inset-0 w-full h-screen z-0 transition-opacity duration-300 ${introFinished ? 'pointer-events-none opacity-0' : 'pointer-events-auto'}`}
      >
        <WorkbenchScene />
      </div>

      {/* Pinned 3D Intro Scroll Distance (150vh) */}
      <div className="relative z-10 w-full" id="intro-3d-scroll-area">
        <section className="h-screen flex flex-col justify-end items-center pb-12 px-6 pointer-events-none">
          <div 
            ref={scrollHintRef} 
            className="pointer-events-auto flex flex-col items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase text-[#666666]"
          >
            <span>SCROLL TO ENTER</span>
            <span className="animate-bounce text-sm text-[#B8F500] font-bold bg-[#151515] px-2 py-0.5 rounded-full shadow-sm">↓</span>
          </div>
        </section>
        <div className="h-[50vh] w-full pointer-events-none" />
      </div>

      {/* ============================================================ */}
      {/* THE ACTUAL HTML PORTFOLIO WEBSITE (Inside PC Monitor Screen)   */}
      {/* ============================================================ */}
      <div className="relative z-20 w-full bg-[#F3F1EC] text-[#111111]">
        {/* HERO STARTING SCREEN */}
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-7xl mx-auto pt-24">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#B8F500] uppercase tracking-[0.25em] mb-6 bg-[#151515] px-3.5 py-1.5 rounded-[2px] w-fit">
            <span className="w-2 h-2 rounded-full bg-[#B8F500] animate-pulse" />
            <span>MEET / DEV · SYSTEM_ACTIVE</span>
          </div>
          
          <h1 className="font-heading font-bold text-5xl sm:text-7xl md:text-8xl text-[#111111] tracking-tight leading-[0.95] mb-6">
            MEET ALSHI
          </h1>

          <p className="font-mono text-lg sm:text-2xl md:text-3xl text-[#666666] tracking-wide uppercase font-semibold mb-6">
            FULL-STACK DEVELOPER
          </p>

          <p className="font-sans text-base sm:text-xl text-[#444444] max-w-2xl leading-relaxed mb-10">
            Building digital products, scalable distributed systems, and real-time interactive web platforms.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3.5 bg-[#151515] text-[#F3F1EC] font-mono text-xs font-bold uppercase tracking-wider rounded-[2px] hover:bg-[#B8F500] hover:text-[#111111] transition-all shadow-sm"
            >
              EXPLORE PROJECTS ↓
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 bg-transparent border border-black/20 text-[#111111] font-mono text-xs font-semibold uppercase tracking-wider rounded-[2px] hover:border-black transition-all"
            >
              CONTACT ME
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
