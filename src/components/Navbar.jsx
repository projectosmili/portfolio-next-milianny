"use client";

export default function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="nav-container">
        <a className="logo" href="#home" aria-label="Início do portfólio">
          <img src="/images/logo.png" alt="Logo Radia" />
        </a>

        <nav aria-label="Navegação principal">
          <ul className="nav-links" role="list">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#skills">Stack</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}