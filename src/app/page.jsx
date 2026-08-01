import Hero from "../components/Hero";
import BackendArchitecture from "../components/BackendArchitecture";
import BackendKnowledge from "../components/BackendKnowledge";
import SocialLinks from "../components/SocialLinks";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <BackendArchitecture />
      <BackendKnowledge />
      <SocialLinks />
    </main>
  );
}
