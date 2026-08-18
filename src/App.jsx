import HeroSection from './components/hero/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import CertificationsSection from './components/sections/CertificationsSection';
import JourneySection from './components/sections/JourneySection';
import ContactSection from './components/sections/ContactSection';
import SmoothScroll from './components/layout/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#F3F1EC] text-[#111111] font-sans antialiased selection:bg-[#B8F500] selection:text-[#111111] overflow-x-hidden">
        
        {/* 1. 3D Intro & Portfolio Starting Hero Screen */}
        <HeroSection />

        {/* 2. About Section */}
        <AboutSection />

        {/* 3. Projects Archive Section (SPENDR, CAMPUSCARE, MEDICARE, SEARCHX) */}
        <ProjectsSection />

        {/* 4. Honors & Certifications Section */}
        <CertificationsSection />

        {/* 5. Development Journey Section */}
        <JourneySection />

        {/* 6. Contact Section */}
        <ContactSection />

      </div>
    </SmoothScroll>
  );
}

export default App;
