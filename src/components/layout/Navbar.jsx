import { useState, useEffect } from 'react';
import { clsx } from 'clsx';

export function Navbar({ brandRef }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300 py-5',
        scrolled 
          ? 'bg-[#F2F1ED]/85 backdrop-blur-md border-b border-black/10 py-4 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        
        {/* Top-Left Brand Logo */}
        <a 
          ref={brandRef}
          href="#" 
          className="text-lg font-heading font-bold tracking-tighter text-[#111111] group flex items-center gap-0.5"
        >
          MEET<span className="text-[#B8F500] font-bold group-hover:rotate-12 transition-transform inline-block">/</span>DEV
        </a>

        {/* Top-Right Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Work', href: '#journey-scroll-area' },
            { label: 'About', href: '#about' },
            { label: 'Journey', href: '#journey' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono text-[#666666] hover:text-[#111111] transition-colors uppercase tracking-widest font-medium"
            >
              {link.label}
            </a>
          ))}
          
          <a
            href="#resume"
            className="text-xs font-mono px-4 py-2 rounded-sm bg-[#151515] text-[#F2F1ED] border border-black/20 hover:bg-[#B8F500] hover:text-[#111111] transition-all uppercase tracking-wider font-semibold shadow-sm"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
