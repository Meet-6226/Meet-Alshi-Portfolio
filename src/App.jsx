import { useState, useEffect } from 'react';
import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import CertificationsSection from './components/sections/CertificationsSection';
import JourneySection from './components/sections/JourneySection';
import ContactSection from './components/sections/ContactSection';
import ProjectCaseStudy from './components/projects/ProjectCaseStudy';
import { Navbar } from './components/layout/Navbar';
import SmoothScroll from './components/layout/SmoothScroll';

function App() {
  const [activeProjectSlug, setActiveProjectSlug] = useState(null);

  // Sync Hash & Route Location (Supports /projects/spendr, #projects/spendr, #spendr, etc.)
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;

      if (path.startsWith('/projects/')) {
        const slug = path.replace('/projects/', '');
        if (slug) setActiveProjectSlug(slug);
      } else if (hash.includes('/projects/')) {
        const slug = hash.split('/projects/')[1];
        if (slug) setActiveProjectSlug(slug);
      } else if (hash === '#spendr') {
        setActiveProjectSlug('spendr');
      } else if (hash === '#aayu-opd') {
        setActiveProjectSlug('aayu-opd');
      } else if (hash === '#campuscare') {
        setActiveProjectSlug('campuscare');
      } else if (hash === '#banquet-management') {
        setActiveProjectSlug('banquet-management');
      }
    };

    handleLocationChange();
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);

    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  const openProject = (slug) => {
    setActiveProjectSlug(slug);
    window.history.pushState(null, '', `#/projects/${slug}`);
  };

  const closeProject = () => {
    setActiveProjectSlug(null);
    window.history.pushState(null, '', '#projects');
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleSectionNavigation = (sectionId) => {
    setActiveProjectSlug(null);
    window.history.pushState(null, '', sectionId ? `#${sectionId}` : '#');
    setTimeout(() => {
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#050505] text-[#F2F2F2] font-sans antialiased selection:bg-[#A3FF00] selection:text-[#050505] overflow-x-hidden">
        
        {/* Global Fixed Top Navbar (Present across both Main Portfolio & Project Case Study pages) */}
        <Navbar onNavigateSection={handleSectionNavigation} />

        {/* Dynamic View: Project Case Study or Main Portfolio */}
        {activeProjectSlug ? (
          <ProjectCaseStudy 
            projectSlug={activeProjectSlug} 
            onClose={closeProject} 
            onNavigateNext={(nextSlug) => openProject(nextSlug)} 
          />
        ) : (
          <>
            {/* 1. 3D Intro & Portfolio Starting Hero Screen */}
            <HeroSection />

            {/* 2. About Section */}
            <AboutSection />

            {/* 3. Projects Archive Section */}
            <ProjectsSection onOpenProject={openProject} />

            {/* 4. Honors & Certifications Recognition Ledger */}
            <CertificationsSection />

            {/* 5. Development Journey Section */}
            <JourneySection />

            {/* 6. System Terminal Contact Section */}
            <ContactSection />
          </>
        )}

      </div>
    </SmoothScroll>
  );
}

export default App;
