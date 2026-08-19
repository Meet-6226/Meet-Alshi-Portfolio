import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WorkbenchScene from '../3d/WorkbenchScene';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef();
  const sceneContainerRef = useRef();
  const scrollHintRef = useRef();
  const canvasWrapperRef = useRef();
  
  // Dev Debug State
  const [debugInfo, setDebugInfo] = useState({
    show: false,
    stageName: 'SHOT 01 — ESTABLISHING OVERVIEW',
    progress: 0,
    camPos: [26.5, 23.8, 28.5],
    targetPos: [-1.28, 11.9, -1.20],
  });

  useGSAP(() => {
    // 1. PIN THE 3D SCENE CONTAINER TO VIEWPORT FOR 400VH SCROLL DISTANCE
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: sceneContainerRef.current,
      pinSpacing: false,
      scrub: 1.0,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    });

    // 2. Scroll Indicator Fade Out (0.00 -> 0.05)
    gsap.to(scrollHintRef.current, {
      opacity: 0,
      y: -15,
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: '5% top',
        scrub: true,
      },
    });

    // 3. Smooth Seamless 3D Intro -> Portfolio Transition (0.90 -> 1.00)
    gsap.to(canvasWrapperRef.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: heroRef.current,
        start: '90% top',
        end: 'bottom bottom',
        scrub: 1.0,
      },
    });
  }, { scope: heroRef });

  return (
    <section 
      ref={heroRef} 
      className="relative w-full h-[400vh] bg-[#050505] text-[#F2F2F0]" 
      id="hero-3d-scroll-area"
    >
      {/* GSAP Pinned Viewport Container */}
      <div 
        ref={sceneContainerRef} 
        className="w-full h-screen bg-[#050505] relative overflow-hidden z-10"
      >
        {/* Development Debug Panel (Only visible when debugInfo.show === true) */}
        {debugInfo.show && (
          <div className="fixed top-20 right-6 z-50 bg-[#090909]/90 backdrop-blur-md border border-[#242424] p-3.5 rounded font-mono text-[10px] text-[#8A8A86] shadow-xl pointer-events-none space-y-1">
            <div className="text-[#A6B84A] font-bold uppercase">{debugInfo.stageName}</div>
            <div>PROGRESS: {(debugInfo.progress * 100).toFixed(1)}%</div>
            <div>CAM: [{debugInfo.camPos.map(v => v.toFixed(1)).join(', ')}]</div>
            <div>TARGET: [{debugInfo.targetPos.map(v => v.toFixed(1)).join(', ')}]</div>
          </div>
        )}

        {/* WebGL 3D Canvas Wrapper */}
        <div 
          ref={canvasWrapperRef} 
          className="absolute inset-0 w-full h-full z-0 bg-[#050505]"
        >
          <WorkbenchScene onDebugUpdate={setDebugInfo} />
        </div>

        {/* Floating Scroll Indicator Overlay */}
        <div 
          ref={scrollHintRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-auto flex flex-col items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase text-[#8A8A86]"
        >
          <span>SCROLL TO ENTER</span>
          <span className="animate-bounce text-sm text-[#A6B84A] font-bold bg-[#080808] px-2.5 py-1 rounded-full border border-[#242424] shadow-lg">↓</span>
        </div>
      </div>
    </section>
  );
}
