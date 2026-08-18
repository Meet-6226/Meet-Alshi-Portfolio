import gsap from 'gsap';

// Reusable text reveal animation (staggered letters or words)
export const animateTextReveal = (targets, options = {}) => {
  const { delay = 0, duration = 0.8, stagger = 0.02, y = 20 } = options;
  return gsap.fromTo(
    targets,
    { y, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
    { 
      y: 0, 
      opacity: 1, 
      clipPath: 'inset(0 0 0% 0)', 
      duration, 
      stagger, 
      ease: 'power3.out', 
      delay 
    }
  );
};

// Reusable mask reveal for images or containers
export const animateMaskReveal = (targets, options = {}) => {
  const { delay = 0, duration = 1.2, direction = 'top' } = options;
  
  let startClip, endClip;
  switch (direction) {
    case 'left':
      startClip = 'polygon(0 0, 0 0, 0 100%, 0% 100%)';
      break;
    case 'right':
      startClip = 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)';
      break;
    case 'top':
    default:
      startClip = 'polygon(0 0, 100% 0, 100% 0, 0 0)';
      break;
  }
  endClip = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';

  return gsap.fromTo(
    targets,
    { clipPath: startClip, scale: 1.05 },
    { clipPath: endClip, scale: 1, duration, ease: 'power2.inOut', delay }
  );
};

// Hero Entrance Sequence Builder
export const createHeroSequence = (refs) => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  
  // 1. Background / Canvas fade (handled by css/initial state usually, but we can enforce)
  if (refs.canvas) {
    tl.fromTo(refs.canvas, { opacity: 0 }, { opacity: 1, duration: 1 });
  }

  // 2. 3D Workbench drops in (handled internally by the 3D component's own timeline, but we stagger UI here)
  
  // 3. Identity (Name)
  if (refs.identity) {
    tl.fromTo(
      refs.identity,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.5' // Overlap slightly
    );
  }

  // 4. Role
  if (refs.role) {
    tl.fromTo(
      refs.role,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.6'
    );
  }

  // 5. Description
  if (refs.description) {
    tl.fromTo(
      refs.description,
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.6'
    );
  }

  // 6. CTA
  if (refs.cta) {
    tl.fromTo(
      refs.cta,
      { y: 10, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6 },
      '-=0.4'
    );
  }

  return tl;
};
