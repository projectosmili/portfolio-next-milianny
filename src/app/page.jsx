import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import BackendArchitecture from "../components/BackendArchitecture";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import BackendKnowledge from "../components/BackendKnowledge";
import Footer from "../components/Footer";
import SocialLinks from "../components/SocialLinks";

export default function HomePage() {
  return (
    <div className="page-shell">
      <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <About />
        <BackendArchitecture />
        <BackendKnowledge />
        <Skills />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  );
}
