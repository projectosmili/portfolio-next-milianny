'use client';

import { useState } from 'react';
import styles from './BackendArchitecture.module.css';

const layers = [
  {
    id: 'clients',
    label: 'Clientes',
    title: 'Clientes',
    summary:
      'Começo pela experiência do usuário e crio interfaces claras, responsivas e alinhadas com as necessidades reais do produto.',
    topics: ['Aplicativos web', 'Aplicativos mobile', 'Clientes REST', 'WebSockets', 'Fluxos de UX'],
    experience: [
      'Interfaces focadas em usabilidade e clareza do produto',
      'Comunicação com APIs por meio de contratos estruturados',
      'Integração frontend alinhada ao comportamento do backend'
    ]
  },
  {
    id: 'api',
    label: 'Camada de API',
    title: 'Camada de API',
    summary:
      'Construo APIs previsíveis, seguras e fáceis de evoluir conforme o sistema cresce.',
    topics: ['REST', 'GraphQL', 'Autenticação', 'Validação', 'OpenAPI'],
    experience: [
      'Endpoints organizados em torno de casos de negócio',
      'Padrões de autorização e validação de entrada',
      'Versionamento e tratamento de erros aplicados de forma consistente'
    ]
  },
  {
    id: 'business',
    label: 'Camada de negócio',
    title: 'Camada de negócio',
    summary:
      'A lógica principal é mantida explícita para que as regras fiquem compreensíveis e fáceis de manter.',
    topics: ['Casos de uso', 'Serviços', 'Regras de domínio', 'Enums', 'Orquestração de fluxos'],
    experience: [
      'Regras de negócio isoladas de preocupações de transporte',
      'Serviços com responsabilidades claras',
      'Orquestração de fluxos para operações complexas'
    ]
  },
  {
    id: 'persistence',
    label: 'Persistência',
    title: 'Persistência',
    summary:
      'Trato a persistência como base crítica, equilibrando consistência, performance de consultas e manutenibilidade.',
    topics: ['PostgreSQL', 'SQL', 'Índices', 'Transações', 'Repositórios', 'ORM', 'DBeaver', 'Migrations', 'Connection Pool', 'Otimização de queries'],
    experience: [
      'Módulo de assinatura',
      'Módulo de notificações',
      'Atualizações de faturas',
      'Queries agendadas',
      'Repository Pattern'
    ]
  },
  {
    id: 'integrations',
    label: 'Integrações',
    title: 'Integrações',
    summary:
      'Integro sistemas externos com cuidado para que a plataforma permaneça resiliente e observável.',
    topics: ['Webhooks', 'Filas', 'APIs de terceiros', 'Retries', 'Idempotência'],
    experience: [
      'Conexões com provedores de pagamento e notificações',
      'Retries controlados para falhas transitórias',
      'Tratamento seguro de payloads específicos do fornecedor'
    ]
  },
  {
    id: 'background',
    label: 'Processamento em segundo plano',
    title: 'Processamento em segundo plano',
    summary:
      'Tarefas de longa execução são removidas dos fluxos de requisição para manter os serviços responsivos e confiáveis.',
    topics: ['Jobs agendados', 'Workers', 'Filas', 'Agendamento', 'Tarefas assíncronas'],
    experience: [
      'Tarefas agendadas de manutenção e relatórios',
      'Processamento assíncrono para ações de alto volume',
      'Jobs em background com tratamento de falhas claro'
    ]
  },
  {
    id: 'infrastructure',
    label: 'Infraestrutura',
    title: 'Infraestrutura',
    summary:
      'Prefiro automação e práticas de deploy repetíveis para que os ambientes fiquem previsíveis.',
    topics: ['Docker', 'Linux', 'CI/CD', 'Variáveis de ambiente', 'Containers', 'Segredos'],
    experience: [
      'Serviços containerizados para ambientes locais e de staging',
      'Fluxos de deploy com passos repetíveis',
      'Configuração gerenciada para evitar divergência'
    ]
  },
  {
    id: 'observability',
    label: 'Observabilidade',
    title: 'Observabilidade',
    summary:
      'Um backend só é confiável quando as falhas ficam visíveis e fáceis de diagnosticar.',
    topics: ['Logs', 'Métricas', 'Tracing', 'Alertas', 'Monitoramento'],
    experience: [
      'Registro de eventos para debugging e auditoria',
      'Métricas para taxas de erro e throughput',
      'Padrões de alerta para detectar regressões cedo'
    ]
  },
  {
    id: 'architecture',
    label: 'Arquitetura',
    title: 'Arquitetura',
    summary:
      'Penso em camadas e limites para que o sistema evolua sem se tornar frágil.',
    topics: ['Modularidade', 'Separação de responsabilidades', 'Escalabilidade', 'Manutenibilidade', 'Documentação'],
    experience: [
      'Decomposição de serviços guiada por limites de domínio',
      'Propriedade clara entre módulos e equipes',
      'Decisões de arquitetura documentadas com foco em mudanças futuras'
    ]
  }
];

export default function BackendArchitecture() {
  const [activeLayer, setActiveLayer] = useState(layers[3]);

  return (
    <section id="backend-architecture" className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <span className="section-label">Backend</span>
            <h2>Como eu construo backends</h2>
            <p>
              Estruturo os sistemas em camadas claras para que eles permaneçam manuteníveis, testáveis e confiáveis desde o primeiro lançamento.
            </p>
          </div>

          <div className={styles.flow} role="list" aria-label="Backend layers">
            {layers.map((layer) => {
              const isActive = activeLayer.id === layer.id;

              return (
                <button
                  key={layer.id}
                  type="button"
                  className={`${styles.node} ${isActive ? styles.nodeActive : ''}`}
                  onClick={() => setActiveLayer(layer)}
                >
                  <span>{layer.label}</span>
                </button>
              );
            })}
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <p className={styles.cardBadge}>{activeLayer.label}</p>
              <h3>{activeLayer.title}</h3>
              <p>{activeLayer.summary}</p>
            </div>

            <div className={styles.contentGrid}>
              <div>
                <h4>Tecnologias e conceitos</h4>
                <div className={styles.pills}>
                  {activeLayer.topics.map((topic) => (
                    <span key={topic} className={styles.pill}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4>Experiência real</h4>
                <ul className={styles.list}>
                  {activeLayer.experience.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">✔</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
