import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home" aria-label="Apresentação principal">
      <div className={styles.spotlight} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <img
              src="/images/profilephoto.png"
              alt="Milianny Cova"
              className={styles.image}
            />
          </div>

          <h1 className={styles.title}>Milianny Cova</h1>

          <p className={styles.lead}>
            Desenvolvedora Full Stack · Data · IA
          </p>

          <p className={styles.description}>
            Soluções digitais com prioridade em
            experiência, performance e evolução contínua do produto.
          </p>

          <div className={styles.highlights}>
            <article className={styles.card}>
              <strong>3+ projetos feitos</strong>
              <span>Do conceito à interface final, com atenção aos detalhes.</span>
            </article>

            <article className={styles.card}>
              <strong>React · Next.js · Node.js · Flutter</strong>
              <span>Stack moderna para aplicações rápidas, organizadas e fáceis de evoluir.</span>
            </article>
        <div> </div>

            </div>
            <a href="#contact" className={styles.ctaButton}>
            
            </a>
          </div>
        </div>
        <div className={styles.background} aria-hidden="true" />
        </section>
    );

    }