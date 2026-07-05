const highlights = [
  {
    title: "Trabalho colaborativo",
    text: "Tenho facilidade para atuar em equipe com comunicação clara e atenção aos detalhes.",
  },
  {
    title: "Aprendizado contínuo",
    text: "Busco constantemente aprender e evoluir"
  },
];

export default function About() {
  return (
    <section id="sobre" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <span className="section-label">Sobre mim</span>

            <h2 className="about-title">
             Mulher criativa com trajetória construída entre design,
              fotografia, e experiências digitais.
            </h2>

            <div className="about-text">
              <p>
                Minha base vem do design gráfico e da fotografia, áreas que desenvolveram
                meu olhar estético, minha sensibilidade visual e minha atenção aos detalhes.
                Ao longo do meu caminho, também criei uma marca de roupas, experiência que
                ampliou minha visão sobre identidade, comunicação, branding e conexão com o
                público por meio da imagem e da proposta de valor.
              </p>

              <p>
                Além disso, iniciei meus estudos em Design de Obras Civis, uma formação que,
                mesmo não tendo sido concluída, contribuiu para fortalecer minha percepção de
                estrutura, organização, planejamento e funcionalidade, elementos que hoje
                também levo para minha forma de pensar projetos e experiências.
              </p>

              <p>
                Fora do trabalho, gosto de conversas sobre a vida, as pessoas, emoções,
                crescimento e a forma como o ser humano se comporta e evolui ao longo do tempo.
                Também amo fotografia, dança, música, leitura e tudo o que me permite continuar
                curiosa, criativa e conectada com o mundo ao meu redor.
              </p>
            </div>
          </div>

          <aside className="about-highlights">
            {highlights.map((item) => (
              <article className="about-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}