import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="home" aria-label="Dashboard principal">
      <div className={styles.spotlight} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.dashboard}>
          <div className={styles.profilePanel}>
            <span className={styles.greeting}>Sobre mim</span>
            <h1 className={styles.title}>Sou Milianny Perdomo</h1>
            <p className={styles.role}>Backend Engineer | Go & APIs</p>

            <div className={styles.aboutSection}>
              
              <p>
                <strong>Back-end Developer (Go)</strong> | Construindo soluções para produtos digitais
              </p>
              <p>
                Atualmente atuo como <strong>Desenvolvedora Back-end</strong>, contribuindo para a evolução de um produto em produção por meio do desenvolvimento de APIs em <strong>Go (Golang)</strong>, implementação de regras de negócio e integrações entre serviços.
              </p>
              <p>
                Ao longo dessa experiência, participei da implementação de novos fluxos de notificações, integrações com serviços externos, processamento assíncrono, webhooks, tarefas agendadas (cron jobs) e melhorias voltadas à escalabilidade, confiabilidade e manutenção do sistema. Cada desafio reforçou a importância de compreender o negócio antes de escrever código e de construir soluções simples para problemas complexos.
              </p>
              <p>
                Estou cursando <strong>Sistemas para Internet</strong> e acredito que a prática diária é o melhor complemento para a formação acadêmica. Busco evoluir constantemente.
              </p>
              <p>
                Minha trajetória profissional começou muito antes da tecnologia. Trabalhei com design gráfico, fotografia e empreendedorismo, além de fundar minha própria marca de roupas. Essas experiências desenvolveram minha criatividade, visão de produto, comunicação, capacidade de adaptação e olhar atento aos detalhes  habilidades que hoje levo para o desenvolvimento de software.
              </p>
              <p>
                Mais do que escrever código, gosto de entender como os sistemas funcionam, como diferentes componentes se conectam e como pequenas decisões técnicas impactam a experiência de milhares de usuários.
              </p>
              <p>
                Fora do trabalho, adoro conversas sobre la vida, las personas, las emociones, el crecimiento y la manera en que los seres humanos se comportan y evolucionan a lo largo del tiempo. Gosto de viajar, fotografar, dançar, cantar e escrever , atividades que me ajudam a manter a curiosidade e a conexão com o mundo ao meu redor.
              </p>
              <p>
                Estou sempre em busca de desafios que me permitam aprender, colaborar com equipes talentosas e construir produtos que gerem impacto real.
              </p>
              <p className={styles.ctaText}>
                <strong>Vamos construir algo incrível juntos? 🚀</strong>
              </p>
            </div>
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
