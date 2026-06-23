import { BookOpen, Code2, Database, Lightbulb } from 'lucide-react'

const skills = [
  { icon: Code2, title: 'Desenvolvimento', text: 'React, TypeScript, Node.js, WordPress, Bootstrap e Tailwind' },
  { icon: Database, title: 'Dados', text: 'Modelagem e organização com SQL, NoSQL, autenticação JWT e painéis web' },
  { icon: BookOpen, title: 'Comunicação', text: 'Experiência como professor para explicar processos com clareza' },
  { icon: Lightbulb, title: 'Soluções', text: 'Tecnologia aplicada a rotinas reais de empresas, equipes e clientes' },
]

export function About() {
  return (
    <section className="section section-muted" id="sobre">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Quem sou</p>
          <h2>Tecnologia com propósito, organização e visão prática.</h2>
          <p>
            Formado em Ciência da Computação, desenvolvedor Full Stack e professor. Crio soluções digitais para empresas
            que precisam melhorar processos, apresentar serviços, organizar informações e dar mais agilidade para a
            operação.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map(({ icon: Icon, title, text }) => (
            <article className="skill-card" key={title}>
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
