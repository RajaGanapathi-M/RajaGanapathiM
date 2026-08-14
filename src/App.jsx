import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import AIArea from './components/AIArea';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import HireMe from './components/HireMe';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      {/* Skip to main content (accessibility) */}
      <a href="#home" className="skip-link">Skip to main content</a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <AIArea />
        <HireMe />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
