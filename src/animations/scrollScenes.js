import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useStore } from '../utils/store';

gsap.registerPlugin(ScrollTrigger);

export function initScrollScenes(triggerElement) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const setScrollPhase = useStore.getState().setScrollPhase;
  const setActiveProject = useStore.getState().setActiveProject;
  const openCaseStudy = useStore.getState().openCaseStudy;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1.0,
      onUpdate: (self) => {
        const p = self.progress;
        
        // Exact Milestone Thresholds
        if (p < 0.25) {
          // SCROLL 0% — WORKSTATION IDLE
          setScrollPhase(0);
          setActiveProject(null);
        } else if (p < 0.45) {
          // SCROLL 25% — MONITOR WAKES
          setScrollPhase(1);
          setActiveProject(null);
        } else if (p < 0.60) {
          // SCROLL 45% — KEYBOARD REACTS
          setScrollPhase(2);
          setActiveProject(null);
        } else if (p < 0.75) {
          // SCROLL 60% — SPENDR ACTIVATES
          setScrollPhase(3);
          setActiveProject('spendr');
        } else if (p < 0.95) {
          // SCROLL 75% — MONITOR BECOMES SPENDR INTERFACE
          setScrollPhase(4);
          setActiveProject('spendr');
        } else {
          // SCROLL 100% — CASE STUDY
          setScrollPhase(5);
          setActiveProject('spendr');
        }
      }
    }
  });

  return tl;
}
