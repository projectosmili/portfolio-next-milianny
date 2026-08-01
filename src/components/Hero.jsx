import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home" aria-label="Dashboard principal">
      <div className={styles.spotlight} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.dashboard}>
          <div className={styles.profilePanel}>
            <span className={styles.greeting}>Olá 👋</span>
            <h1 className={styles.title}>Sou Milianny Perdomo</h1>
            <p className={styles.role}>Desenvolvedora Backend</p>
            <p className={styles.timeline}>Caminho para Backend Semi Senior</p>
          </div>

          <div className={styles.statusPanel}>
            <div className={styles.panelHeading}>Posição atual</div>
            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>🏢 Empresa</span>
              <strong className={styles.statusValue}>Shoptour</strong>
            </div>

            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>Função</span>
              <span className={styles.statusValue}>Desenvolvedora Backend</span>
            </div>

            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>Início</span>
              <span className={styles.statusValue}>Julho 2026</span>
            </div>

            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>País</span>
              <span className={styles.statusValue}>Brasil</span>
            </div>

            <div className={styles.statusItem}>
              <span className={styles.statusLabel}>Status</span>
              <span className={styles.statusValue}>Trabalhando em sistemas de produção</span>
            </div>
          </div>
        </div>

        <div className={styles.widgets}>
          <article className={styles.widgetCard}>
            <div className={styles.widgetHeader}>
              <span>Progresso</span>
              <strong>42%</strong>
            </div>
            <div className={styles.progressBar} aria-hidden="true">
              <div className={styles.progressFill} />
            </div>
            <pre className={styles.progressAscii}>██████████░░░░░░░░</pre>
          </article>

          <article className={styles.widgetCard}>
            <div className={styles.widgetHeader}>
              <span>Foco atual</span>
            </div>
            <ul className={styles.focusList}>
              <li>✔ Jobs agendados</li>
              <li>✔ Notificações</li>
              <li>✔ Event-driven</li>
              <li>✔ PostgreSQL</li>
              <li>✔ Clean Architecture</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
