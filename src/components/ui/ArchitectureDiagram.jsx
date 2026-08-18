import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ArchitectureDiagram() {
  const containerRef = useRef();

  useGSAP(() => {
    // Only animate if not reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set('.arch-node', { opacity: 1, scale: 1 });
      gsap.set('.arch-line', { height: '2rem' });
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        end: 'bottom 25%',
        toggleActions: 'play none none reverse'
      }
    });

    // Animate Frontend
    tl.fromTo('.node-1', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
      // Line to API
      .fromTo('.line-1', { height: 0 }, { height: '2rem', duration: 0.4, ease: 'power1.inOut' })
      // Animate API
      .fromTo('.node-2', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' })
      // Line to Backend
      .fromTo('.line-2', { height: 0 }, { height: '2rem', duration: 0.4, ease: 'power1.inOut' })
      // Animate Backend
      .fromTo('.node-3', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
      // Line to DB
      .fromTo('.line-3', { height: 0 }, { height: '2rem', duration: 0.4, ease: 'power1.inOut' })
      // Animate DB
      .fromTo('.node-4', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex flex-col items-center py-12">
      {/* Node 1 */}
      <div className="arch-node node-1 w-64 p-6 border border-border bg-surface text-center opacity-0 rounded-sm">
        <h3 className="text-accent font-mono font-bold mb-2">Frontend</h3>
        <p className="text-sm text-primary/70">React & WebGL Interface</p>
      </div>

      <div className="arch-line line-1 w-px bg-border h-0" />

      {/* Node 2 */}
      <div className="arch-node node-2 w-64 p-6 border border-accent/30 bg-surface text-center opacity-0 rounded-sm shadow-[0_0_15px_rgba(212,255,0,0.1)]">
        <h3 className="text-accent font-mono font-bold mb-2">API Gateway</h3>
        <p className="text-sm text-primary/70">GraphQL / REST</p>
      </div>

      <div className="arch-line line-2 w-px bg-border h-0" />

      {/* Node 3 */}
      <div className="arch-node node-3 w-64 p-6 border border-border bg-surface text-center opacity-0 rounded-sm">
        <h3 className="text-primary font-mono font-bold mb-2">Backend Services</h3>
        <p className="text-sm text-primary/70">Rust & Node.js Microservices</p>
      </div>

      <div className="arch-line line-3 w-px bg-border h-0" />

      {/* Node 4 */}
      <div className="arch-node node-4 w-64 p-6 border border-border bg-surface text-center opacity-0 rounded-sm">
        <h3 className="text-primary font-mono font-bold mb-2">Database</h3>
        <p className="text-sm text-primary/70">PostgreSQL / Redis</p>
      </div>
    </div>
  );
}
