"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar" role="banner">
      <div className="nav-container">
        <Link className="logo" href="/" aria-label="Início do portfólio">
          <img src="/images/logo.png" alt="Logo Radia" />
        </Link>

        <nav aria-label="Navegação principal">
          <ul className="nav-links" role="list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/journal">Journal</Link></li>
            <li><Link href="/roadmap">Backend Roadmap</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}