import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Resume from "@/components/portfolio/Resume";
import Education from "@/components/portfolio/Education";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Training from "@/components/portfolio/Training";
import Certifications from "@/components/portfolio/Certifications";
import Achievements from "@/components/portfolio/Achievements";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <Hero />
    
    <Skills />
    <Projects />
    <Training />
    <Certifications />
    <Achievements />
    <Education />
    <Contact />
    <Footer />
  </div>
);

export default Index;
