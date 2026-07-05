
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <section className="social-links-section" aria-label="Redes sociais">
      <div className="container">
        <p>Vamos construir algo juntos?</p>
        <div className="social-icons">
          <a href="https://github.com/projectosmili" className="social-link" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/mili-cova-/" className="social-link" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://instagram.com/mili_perdomocy" className="social-link" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
}
