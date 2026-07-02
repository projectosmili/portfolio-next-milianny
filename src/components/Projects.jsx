"use client";
import { useEffect, useState } from "react";
const projectImages=["/images/1.png","/images/2.png","/images/3.png","/images/4.png"];
export default function Projects(){
 const [current,setCurrent]=useState(0);
 useEffect(()=>{const id=setInterval(()=>setCurrent(c=>(c+1)%projectImages.length),1000); return ()=>clearInterval(id);},[]);
 return <section id="projects" className="projects-section"><div className="container"><h2>Projetos</h2><div className="project-card"><div className="carousel">{projectImages.map((src,index)=><img key={src} src={src} className={index===current?"active":""} alt={`Tela ${index+1} do app Tastee`} />)}</div><div className="project-info"><h3 className="project-name">App Tastee</h3><p className="project-role">Desenvolvimento Mobile</p><p className="project-description">Aplicativo de delivery desenvolvido com Flutter e Dart. Possui navegação entre telas, componentes reutilizáveis e gerenciamento de pedidos, com foco em performance e experiência do usuário.</p><p className="project-tech">Tecnologias: Flutter · Dart · Material Design</p><div className="project-links"><a href="https://github.com/projectosmili/flutter" target="_blank" rel="noreferrer">Ver em GitHub</a></div></div></div></div></section>
}