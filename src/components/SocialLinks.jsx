
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function SocialLinks() {
  return (
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
  );
}
