import { useState, useEffect, lazy, Suspense } from 'react';
import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import CertificationsSection from './components/sections/CertificationsSection';
import JourneySection from './components/sections/JourneySection';
import ContactSection from './components/sections/ContactSection';
import InitialLoader from './components/loader/InitialLoader';
import { Navbar } from './components/layout/Navbar';
import SmoothScroll from './components/layout/SmoothScroll';

// Lazy-loaded heavy components & routes (Code Splitting)
const ProjectCaseStudy = lazy(() => import('./components/projects/ProjectCaseStudy'));
const ResumeViewerPage = lazy(() => import('./components/resume/ResumeViewerPage'));

function App() {
  const [activeProjectSlug, setActiveProjectSlug] = useState(null);
  const [isResumeView, setIsResumeView] = useState(false);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  // Sync Hash & Route Location (Supports /projects/spendr, /resume, #resume, etc.)
  useEffect(() => {
    const handleLocationChange = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;

      if (path === '/resume' || hash === '#resume' || hash === '#/resume') {
        setIsResumeView(true);
        setActiveProjectSlug(null);
      } else if (path.startsWith('/projects/')) {
        const slug = path.replace('/projects/', '');
        if (slug) {
          setActiveProjectSlug(slug);
          setIsResumeView(false);
        }
      } else if (hash.includes('/projects/')) {
        const slug = hash.split('/projects/')[1];
        if (slug) {
          setActiveProjectSlug(slug);
          setIsResumeView(false);
        }
      } else if (hash === '#spendr') {
        setActiveProjectSlug('spendr');
        setIsResumeView(false);
      } else if (hash === '#aayu-opd') {
        setActiveProjectSlug('aayu-opd');
        setIsResumeView(false);
      } else if (hash === '#campuscare') {
        setActiveProjectSlug('campuscare');
        setIsResumeView(false);
      } else if (hash === '#banquet-management' || hash === '#banquet-management-system') {
        setActiveProjectSlug('banquet-management-system');
        setIsResumeView(false);
      } else {
        setIsResumeView(false);
        setActiveProjectSlug(null);
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
    setIsResumeView(false);
    setActiveProjectSlug(slug);
    window.history.pushState(null, '', `#/projects/${slug}`);
  };

  const closeProject = () => {
    setIsResumeView(false);
    setActiveProjectSlug(null);
    window.history.pushState(null, '', '#projects');
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleSectionNavigation = (sectionId) => {
    setIsResumeView(false);
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
      <div className="relative min-h-screen bg-[#050505] text-[#F2F2F0] font-sans antialiased selection:bg-[#A6B84A] selection:text-[#050505] overflow-x-hidden">
        
        {/* Personalized Minimal Technical Loader Experience */}
        {!isLoadingComplete && (
          <InitialLoader onComplete={() => setIsLoadingComplete(true)} />
        )}

        {/* Global Fixed Top Navbar */}
        <Navbar onNavigateSection={handleSectionNavigation} />

        {/* Dynamic View Rendering with Suspense */}
        <Suspense fallback={
          <div className="min-h-screen bg-[#050505] flex items-center justify-center font-mono text-xs text-[#A6B84A]">
            <span>LOADING_MODULE...</span>
          </div>
        }>
          {isResumeView ? (
            <ResumeViewerPage />
          ) : activeProjectSlug ? (
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

              {/* 4. Honors & Achievements Recognition Ledger */}
              <CertificationsSection />

              {/* 5. Development Journey Section */}
              <JourneySection />

              {/* 6. System Terminal Contact Section */}
              <ContactSection />
            </>
          )}
        </Suspense>

      </div>
    </SmoothScroll>
  );
}

export default App;
