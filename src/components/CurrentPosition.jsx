import styles from "./Hero.module.css";

export default function CurrentPosition() {
  return (
    <section className={styles.positionSection} aria-label="Posição atual">
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
    </section>
  );
}
