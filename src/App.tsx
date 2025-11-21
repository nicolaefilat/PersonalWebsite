import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import ProjectDetails from './components/ProjectDetails';

import siteData from '@config/site.yaml';

interface SiteConfig {
  documentTitle: string;
}

const Home = () => (
  <main>
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Contact />
  </main>
);

function App() {
  const siteConfig: SiteConfig = siteData as SiteConfig;

  useEffect(() => {
    document.title = siteConfig.documentTitle;
  }, []);

  return (
    <div className="min-h-screen text-foreground bg-background">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
