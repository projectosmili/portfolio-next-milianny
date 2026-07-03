import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";

export default function HomePage() {
  return (
    <div>
      <SocialLinks />
      <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  );
}
