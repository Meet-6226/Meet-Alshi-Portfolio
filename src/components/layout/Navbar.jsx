import { useState, useEffect } from 'react';
import { clsx } from 'clsx';

export function Navbar({ brandRef, onNavigateSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    if (onNavigateSection) {
      e.preventDefault();
      onNavigateSection(href.replace('#', ''));
    }
  };

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-5',
        scrolled 
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[#242424] py-4 shadow-xl'
          : 'bg-[#050505]/60 backdrop-blur-sm border-b border-[#242424]/40 py-5'
      )}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between">
        
        {/* Top-Left Brand Logo */}
        <a 
          ref={brandRef}
          href="#" 
          onClick={(e) => handleLinkClick(e, '#')}
          className="text-lg font-heading font-bold tracking-tighter text-[#F2F2F0] group flex items-center gap-0.5"
        >
          MEET<span className="text-[#A6B84A] font-bold group-hover:rotate-12 transition-transform inline-block">/</span>DEV
        </a>

        {/* Top-Right Navigation Links */}
        <nav className="flex items-center gap-5 sm:gap-8">
          {[
            { label: 'Work', href: '#projects' },
            { label: 'About', href: '#about' },
            { label: 'Journey', href: '#journey' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-xs font-mono text-[#8A8A86] hover:text-[#A6B84A] transition-colors uppercase tracking-widest font-medium"
            >
              {link.label}
            </a>
          ))}
          
          <a
            href="#resume"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="text-xs font-mono px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-[2px] bg-[#080808] text-[#F2F2F0] border border-[#242424] hover:border-[#A6B84A] hover:text-[#A6B84A] transition-all uppercase tracking-wider font-semibold shadow-sm"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
