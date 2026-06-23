import { BarChart3, ClipboardCheck, Globe2, ShieldCheck } from 'lucide-react'

const solutions = [
  {
    icon: ClipboardCheck,
    title: 'Processos internos',
    text: 'Sistemas para registrar ocorrências, atendimentos, tarefas, documentos e histórico de ações da equipe.',
  },
  {
    icon: BarChart3,
    title: 'Gestão e relatórios',
    text: 'Organização de dados em SQL ou NoSQL para consultas, filtros, painéis e tomada de decisão mais rápida.',
  },
  {
    icon: ShieldCheck,
    title: 'Acesso seguro',
    text: 'Login, perfis de usuário, JWT e boas práticas para proteger áreas administrativas e informações sensíveis.',
  },
  {
    icon: Globe2,
    title: 'Presença digital',
    text: 'Sites, landing pages e WordPress com SEO, performance e comunicação clara para clientes e parceiros.',
  },
]

export function BusinessSolutions() {
  return (
    <section className="section business-section" id="solucoes">
      <div className="container">
        <div className="section-heading heading-row">
          <div>
            <p className="eyebrow">Para empresas</p>
            <h2>Soluções digitais para operação, atendimento e gestão.</h2>
          </div>
          <p>
            Para redes de supermercado e outros negócios, o foco é criar ferramentas simples de usar, com dados
            organizados e fluxo claro para a equipe.
          </p>
        </div>

        <div className="solution-grid">
          {solutions.map(({ icon: Icon, title, text }) => (
            <article className="solution-card" key={title}>
              <div className="icon-box">
                <Icon />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
