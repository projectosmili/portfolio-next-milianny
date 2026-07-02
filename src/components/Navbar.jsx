"use client";
export default function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="nav-container">
        <div className="logo" aria-label="Logo Milianny"><a href="#home">Mili</a></div>
        <nav aria-label="Navegação principal">
          <ul className="nav-links" role="list">
            <li><a href="#skills">Currículo</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}