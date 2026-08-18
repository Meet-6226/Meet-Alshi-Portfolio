import gsap from 'gsap';

export function animateHeroSequence({ brand, identity, role, headline, copy, cta, canvas }) {
  // Check reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.set([brand, identity, role, headline, copy, cta, canvas], { opacity: 1, y: 0 });
    return;
  }

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out', duration: 1.0 }
  });

  tl.to(canvas, { opacity: 1, duration: 1.5 }, 0)
    .fromTo(brand, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.6 }, 0.2)
    .fromTo(identity, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7 }, 0.4)
    .fromTo(role, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.5)
    .fromTo(headline, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.8 }, 0.65)
    .fromTo(copy, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, 0.8)
    .fromTo(cta, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7 }, 0.95);

  return tl;
}
