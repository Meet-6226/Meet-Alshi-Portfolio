import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useProgress } from '@react-three/drei';

export default function InitialLoader({ onComplete }) {
  const loaderRef = useRef();
  const contentRef = useRef();
  const { progress, active } = useProgress();

  const [envStatus, setEnvStatus] = useState('LOADING...');
  const [assetStatus, setAssetStatus] = useState('LOADING...');
  const [uiStatus, setUiStatus] = useState('LOADING...');
  const [isReady, setIsReady] = useState(false);

  // Track Real Resource Loading Progress
  useEffect(() => {
    // 1. UI Layer is instantly available
    setUiStatus('READY ✓');

    // 2. Asset & Environment Progress Tracking
    if (progress > 40) {
      setAssetStatus('READY ✓');
    }
    if (progress >= 99 || !active) {
      setEnvStatus('READY ✓');
      setAssetStatus('READY ✓');
      setIsReady(true);
    }
  }, [progress, active]);

  // Handle Smooth Transition Out When Ready
  useEffect(() => {
    if (!isReady) return;

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delayDuration = prefersReducedMotion ? 0.1 : 0.4;

    const timer = setTimeout(() => {
      if (prefersReducedMotion) {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 0.3,
          onComplete: () => onComplete && onComplete(),
        });
      } else {
        const tl = gsap.timeline({
          onComplete: () => onComplete && onComplete(),
        });

        tl.to(contentRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.4,
          ease: 'power2.inOut',
        }).to(
          loaderRef.current,
          {
            opacity: 0,
            duration: 0.4,
            ease: 'power2.inOut',
          },
          '-=0.2'
        );
      }
    }, delayDuration * 1000);

    return () => clearTimeout(timer);
  }, [isReady, onComplete]);

  const displayProgress = Math.min(100, Math.round(progress || 0));

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-[100] bg-[#050505] text-[#F2F2F0] font-sans flex items-center justify-center p-6 selection:bg-[#A6B84A] selection:text-[#050505]"
    >
      <div ref={contentRef} className="max-w-md w-full flex flex-col gap-8">
        
        {/* Top Header */}
        <div className="flex flex-col gap-1 border-b border-[#242424] pb-5">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#A6B84A] uppercase tracking-[0.25em] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#B7F000] animate-pulse" />
            <span>MEET ALSHI</span>
          </div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#F2F2F0] tracking-tight uppercase mt-1">
            INITIALIZING EXPERIENCE
          </h1>
        </div>

        {/* Real Progress Bar */}
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center font-mono text-xs text-[#8A8A86]">
            <span>LOADING_PROGRESS</span>
            <span className="text-[#A6B84A] font-bold">{displayProgress}%</span>
          </div>
          <div className="w-full h-1.5 bg-[#090909] border border-[#242424] rounded-[2px] overflow-hidden">
            <div 
              className="h-full bg-[#A6B84A] transition-all duration-200 ease-out" 
              style={{ width: `${displayProgress}%` }}
            />
          </div>
        </div>

        {/* Resource Readiness Checklist Ledger */}
        <div className="bg-[#080808] border border-[#242424] p-5 rounded-[2px] flex flex-col gap-3 font-mono text-xs">
          
          <div className="flex justify-between items-center">
            <span className="text-[#8A8A86]">3D ENVIRONMENT</span>
            <span className={envStatus.includes('READY') ? 'text-[#A6B84A] font-bold' : 'text-[#777777]'}>
              {envStatus}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#8A8A86]">ASSETS & TEXTURES</span>
            <span className={assetStatus.includes('READY') ? 'text-[#A6B84A] font-bold' : 'text-[#777777]'}>
              {assetStatus}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[#8A8A86]">INTERFACE LAYER</span>
            <span className={uiStatus.includes('READY') ? 'text-[#A6B84A] font-bold' : 'text-[#777777]'}>
              {uiStatus}
            </span>
          </div>

        </div>

        {/* Footer Status */}
        <div className="font-mono text-[11px] text-[#777777] uppercase tracking-widest text-center">
          {isReady ? 'READY TO ENTER →' : 'PREPARING DIGITAL WORKSPACE...'}
        </div>

      </div>
    </div>
  );
}
