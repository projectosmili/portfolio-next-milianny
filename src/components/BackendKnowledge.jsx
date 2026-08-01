'use client';

import styles from './BackendKnowledge.module.css';

const learningNodes = [
  {
    title: 'Go',
    status: 'Em produção',
    notes: 'API, concurrency, worker patterns e processamento assíncrono.',
    links: ['Concurrency', 'Testing', 'Performance'],
    courses: ['Go Fundamentals'],
    books: ['The Go Programming Language'],
    videos: ['Go Concurrency in Practice'],
    prs: ['#184', '#221']
  },
  {
    title: 'Concurrency',
    status: 'Em evolução',
    notes: 'Padrões de goroutines, canais e tratamento de jobs paralelos.',
    links: ['Workers', 'Retry logic', 'Backpressure'],
    courses: ['Advanced Go'],
    books: ['Go in Action'],
    videos: ['Concurrency Patterns'],
    prs: ['#193']
  },
  {
    title: 'Workers',
    status: 'Prático',
    notes: 'Processamento de filas e execução de background jobs com observabilidade.',
    links: ['Queue', 'Scheduler', 'Retries'],
    courses: ['Background Processing'],
    books: ['Designing Data-Intensive Applications'],
    videos: ['Workers Architecture'],
    prs: ['#209']
  },
  {
    title: 'Event Driven',
    status: 'Consolidado',
    notes: 'Integrações orientadas a eventos para notificações e sincronizações.',
    links: ['Pub/Sub', 'Webhooks', 'Outbox'],
    courses: ['Event-Driven Systems'],
    books: ['Building Microservices'],
    videos: ['Introduction to Event Driven'],
    prs: ['#216']
  },
  {
    title: 'Microservices',
    status: 'Arquitetura',
    notes: 'Divisão por contexto, contratos claros e limites de domínio.',
    links: ['Bounded context', 'API contracts', 'Service ownership'],
    courses: ['Domain-Driven Design'],
    books: ['Clean Architecture'],
    videos: ['Microservices Patterns'],
    prs: ['#224']
  },
  {
    title: 'System Design',
    status: 'Em construção',
    notes: 'Escalabilidade, resiliência, trade-offs e documentação de decisões.',
    links: ['Scalability', 'Reliability', 'Trade-offs'],
    courses: ['System Design Primer'],
    books: ['Designing Data-Intensive Applications'],
    videos: ['System Design Basics'],
    prs: ['#231']
  }
];

const journalEntries = [
  {
    week: 'Week 31',
    built: 'Implementação de expiração de assinatura e notificações de cobrança.',
    learned: 'Aprendi a balancear cron jobs, retries e logs com UX de usuário.',
    challenge: 'Falhas repetidas em integrações externas durante o teste de produção.',
    solved: 'Adotei retry com backoff, idempotência e rastreamento de eventos.',
    next: 'Criar um fluxo de observabilidade para todos os jobs agendados.'
  },
  {
    week: 'Week 32',
    built: 'Sistema de processamento de faturas com transações e validações.',
    learned: 'A qualidade do modelo de dados impacta diretamente a manutenção.',
    challenge: 'Conflitos de atualização entre módulos de cobrança e assinatura.',
    solved: 'Organizei o fluxo em um caso de uso claro e isolatei as regras.',
    next: 'Documentar decisões de arquitetura para facilitar a evolução.'
  },
  {
    week: 'Week 33',
    built: 'Review de arquitetura para integrações e módulos de background.',
    learned: 'A documentação correta reduz retrabalho e acelera a tomada de decisão.',
    challenge: 'Divergência de entendimento entre backend e produto.',
    solved: 'Usei diagramas e decisões registradas para alinhar contexto e impacto.',
    next: 'Ampliar a biblioteca de prompts para revisão de PR e debugging.'
  }
];

const productionExperience = [
  {
    title: 'Subscription Expiration',
    problem: 'Usuários não recebiam aviso antes da expiração da assinatura.',
    solution: 'Cron job em Go + PostgreSQL + SendGrid para avisos e reprocessamento.',
    architecture: 'Job agendado, transações, retry e logs estruturados.',
    lessons: 'O melhor alerta é aquele que combina tempo, contexto e observabilidade.'
  },
  {
    title: 'Notification System',
    problem: 'Mensagens de evento chegavam com atraso e sem rastreio confiável.',
    solution: 'Fluxo event-driven com filas, handoff e fallback para envio push.',
    architecture: 'Eventos, fornecedores externos, retry logic e idempotência.',
    lessons: 'Consistência e rastreabilidade são mais importantes que velocidade pura.'
  },
  {
    title: 'Invoice Processing',
    problem: 'Atualizações de cobrança tinham alta chance de gerar inconsistência.',
    solution: 'Processamento transacional com repository pattern e regras claras.',
    architecture: 'Camadas de aplicação, persistência e validação de domínio.',
    lessons: 'O domínio precisa ser explícito para a regra não se perder.'
  }
];

const backendSkills = [
  { name: 'Go', level: 9 },
  { name: 'REST APIs', level: 8 },
  { name: 'SQL', level: 8 },
  { name: 'PostgreSQL', level: 8 },
  { name: 'Docker', level: 7 },
  { name: 'DDD', level: 6 },
  { name: 'System Design', level: 6 },
  { name: 'Kubernetes', level: 4 }
];

const readingList = [
  {
    title: 'Designing Data-Intensive Applications',
    notes: 'Estrutura de dados, consistência e escalabilidade.',
    summary: 'Aplicado em decisões de particionamento, indexação e trade-offs.',
    production: 'Usei esse pensamento em módulos de assinatura e processamento de jobs.'
  },
  {
    title: 'Clean Architecture',
    notes: 'Separação entre regras de negócio e dependências externas.',
    summary: 'Melhorou a clareza de fluxos e a testabilidade.',
    production: 'Apliquei em serviços com regras bem delimitadas.'
  },
  {
    title: 'Building Microservices',
    notes: 'Limites de domínio, contratos e observabilidade.',
    summary: 'Ajuda a evitar acoplamento indevido entre módulos.',
    production: 'Aplicado em integrações e evolução de serviços.'
  },
  {
    title: 'The Go Programming Language',
    notes: 'Padrões de linguagem e performance em Go.',
    summary: 'Fundamento para escrever código mais idiomático e seguro.',
    production: 'Uso em APIs, workers e estruturas concorrentes.'
  }
];

const aiSections = [
  'Biblioteca de prompts',
  'Revisão de arquitetura',
  'Revisão de código',
  'Assistente de PR',
  'Depuração',
  'Documentação',
  'Testes',
  'Aprendizado'
];

const timeline = [
  '2026 — Iniciei na Shoptour',
  'Primeiro recurso em produção',
  'Primeiro job agendado',
  'Primeira revisão de arquitetura',
  'Sistema de notificações',
  'Assinaturas',
  'Testes',
  'Semi Senior'
];

const knowledgeMap = [
  {
    title: 'Backend',
    children: [
      { title: 'API', children: [{ title: 'REST' }, { title: 'Authentication' }] },
      { title: 'Go', children: [{ title: 'Concurrency' }, { title: 'Workers' }] },
      { title: 'PostgreSQL', children: [{ title: 'Transactions' }, { title: 'Indexes' }] },
      { title: 'Docker', children: [{ title: 'Containers' }, { title: 'CI/CD' }] },
      { title: 'Architecture', children: [{ title: 'DDD' }, { title: 'System Design' }] },
      { title: 'Event Driven', children: [{ title: 'Queues' }, { title: 'Webhooks' }] },
      { title: 'Testing', children: [{ title: 'Unit' }, { title: 'Integration' }] },
      { title: 'Observability', children: [{ title: 'Logs' }, { title: 'Metrics' }] },
      { title: 'Infrastructure', children: [{ title: 'Kubernetes' }, { title: 'Secrets' }] },
      { title: 'AI', children: [{ title: 'Prompting' }, { title: 'Automation' }] },
      { title: 'Soft Skills', children: [{ title: 'Communication' }, { title: 'Mentoring' }] }
    ]
  }
];

function TreeNode({ node }) {
  return (
    <div className={styles.treeNode}>
      <span>{node.title}</span>
      {node.children?.length ? (
        <div className={styles.treeChildren}>
          {node.children.map((child) => (
            <TreeNode key={child.title} node={child} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function BackendKnowledge() {
  return (
    <section id="backend-knowledge" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Backend Knowledge Hub</span>
          <h2>Um portfólio com visão de engenharia e contexto real</h2>
          <p>
            Esta seção reúne aprendizado, experiência de produção, leitura, IA e evolução de carreira em uma estrutura que lembra um mapa mental de engenharia.
          </p>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Mapa de aprendizagem</h3>
              <p>Mapa de crescimento técnico com foco em backend e arquitetura.</p>
            </div>
            <div className={styles.graphList}>
              {learningNodes.map((node) => (
                <div key={node.title} className={styles.graphItem}>
                  <div className={styles.graphTitleRow}>
                    <strong>{node.title}</strong>
                    <span>{node.status}</span>
                  </div>
                  <p>{node.notes}</p>
                  <div className={styles.metaGroup}>
                    <div>
                      <h4>Links</h4>
                      <div className={styles.chips}>{node.links.map((item) => <span key={item}>{item}</span>)}</div>
                    </div>
                    <div>
                      <h4>Cursos</h4>
                      <div className={styles.chips}>{node.courses.map((item) => <span key={item}>{item}</span>)}</div>
                    </div>
                    <div>
                      <h4>Livros</h4>
                      <div className={styles.chips}>{node.books.map((item) => <span key={item}>{item}</span>)}</div>
                    </div>
                    <div>
                      <h4>Videos</h4>
                      <div className={styles.chips}>{node.videos.map((item) => <span key={item}>{item}</span>)}</div>
                    </div>
                    <div>
                      <h4>PRs</h4>
                      <div className={styles.chips}>{node.prs.map((item) => <span key={item}>{item}</span>)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Diário de engenharia</h3>
              <p>Registro semanal de evolução, desafios e decisões.</p>
            </div>
            <div className={styles.journalList}>
              {journalEntries.map((entry) => (
                <div key={entry.week} className={styles.journalItem}>
                  <h4>{entry.week}</h4>
                  <ul>
                    <li><strong>O que construí:</strong> {entry.built}</li>
                    <li><strong>O que aprendi:</strong> {entry.learned}</li>
                    <li><strong>Maior desafio:</strong> {entry.challenge}</li>
                    <li><strong>Como resolvi:</strong> {entry.solved}</li>
                    <li><strong>Meta da próxima semana:</strong> {entry.next}</li>
                  </ul>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Experiência em produção</h3>
              <p>Projetos reais, não inventados, com contexto técnico e aprendizados.</p>
            </div>
            <div className={styles.experienceList}>
              {productionExperience.map((item) => (
                <div key={item.title} className={styles.experienceItem}>
                  <h4>{item.title}</h4>
                  <p><strong>Problema:</strong> {item.problem}</p>
                  <p><strong>Solução:</strong> {item.solution}</p>
                  <p><strong>Arquitetura:</strong> {item.architecture}</p>
                  <p><strong>Lições aprendidas:</strong> {item.lessons}</p>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Habilidades de backend</h3>
              <p>Habilidades apresentadas com profundidade e contexto prático.</p>
            </div>
            <div className={styles.skillList}>
              {backendSkills.map((skill) => (
                <div key={skill.name} className={styles.skillRow}>
                  <div className={styles.skillName}>{skill.name}</div>
                  <div className={styles.barTrack} aria-label={`${skill.name} level ${skill.level}`}>
                    {Array.from({ length: 10 }).map((_, index) => (
                      <span key={`${skill.name}-${index}`} className={index < skill.level ? styles.barFilled : styles.barEmpty} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Leituras</h3>
              <p>Livros que influenciam a forma de construir sistemas.</p>
            </div>
            <div className={styles.readingList}>
              {readingList.map((book) => (
                <div key={book.title} className={styles.readingItem}>
                  <h4>{book.title}</h4>
                  <p><strong>Notas:</strong> {book.notes}</p>
                  <p><strong>Resumo:</strong> {book.summary}</p>
                  <p><strong>Aplicação em produção:</strong> {book.production}</p>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>IA na engenharia</h3>
              <p>Uma seção prática para mostrar como a IA é usada no fluxo de engenharia.</p>
            </div>
            <div className={styles.aiGrid}>
              {aiSections.map((item) => (
                <div key={item} className={styles.aiPill}>{item}</div>
              ))}
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Linha do tempo de backend</h3>
              <p>Evolução da carreira em marcos claros de crescimento.</p>
            </div>
            <div className={styles.timeline}>
              {timeline.map((item, index) => (
                <div key={item} className={styles.timelineItem}>
                  <span className={styles.timelineDot} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.cardHeader}>
              <h3>Mapa de conhecimento de backend</h3>
              <p>Um mapa mental vivo, parecido com Notion, Obsidian e roadmap.sh.</p>
            </div>
            <div className={styles.treeWrap}>
              {knowledgeMap.map((node) => (
                <TreeNode key={node.title} node={node} />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
