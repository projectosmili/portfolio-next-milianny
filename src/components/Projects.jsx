"use client";
import { useEffect, useState } from "react";

const projectImages = ["/images/1.png", "/images/2.png", "/images/3.png", "/images/4.png"];

export default function Projectos() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCurrent((value) => (value + 1) % projectImages.length), 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-heading">
          <span className="section-label">Projetos</span>
          <h2>Uma seleção de soluções em que aplico técnica, estética e foco no usuário.</h2>
        </div>

        <div className="project-card">
          <div className="project-visual">
            <div className="carousel">
              {projectImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  className={index === current ? "active" : ""}
                  alt={`Tela ${index + 1} do app Tastee`}
                />
              ))}
            </div>
            <div className="project-badge">Projeto em destaque</div>
          </div>

          <div className="project-info">
            <h3 className="project-name">App Tastee</h3>
            <p className="project-role">Desenvolvimento Mobile</p>
            <p className="project-description">
              Aplicativo de delivery desenvolvido com Flutter e Dart, com navegação fluida,
              componentes reutilizáveis e foco em performance, organização e experiência do usuário.
            </p>

            <div className="tech-pills">
              <span className="tech-pill">Flutter</span>
              <span className="tech-pill">Dart</span>
              <span className="tech-pill">Material Design</span>
            </div>

            <a
              className="text-link"
              href="https://github.com/projectosmili/flutter"
              target="_blank"
              rel="noreferrer"
            >
              Ver em GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}