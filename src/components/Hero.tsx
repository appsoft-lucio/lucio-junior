import { ArrowDown, ArrowUpRight, Github } from 'lucide-react'

const profileTechnologies = [
  'TypeScript',
  'React',
  'WordPress',
  'Node.js',
  'SEO',
  'Delphi',
  'JWT',
  'Bootstrap',
  'React Bootstrap',
  'Vite',
  'Tailwind',
]

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="availability">
            <span />
            Disponível para novos projetos
          </div>
          <p className="eyebrow">Olá, eu sou o Lúcio</p>
          <h1>
            Transformo ideias em <span>experiências digitais.</span>
          </h1>
          <p className="hero-text">
            Desenvolvedor Full Stack e professor, criando soluções que unem tecnologia, estratégia e uma experiência
            simples de usar.
          </p>
          <div className="hero-actions">
            <a className="button" href="#projetos">
              Ver projetos <ArrowDown size={18} />
            </a>
            <a className="button button-ghost" href="https://github.com/appsoft-lucio" target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>

        <div className="profile-wrap">
          {profileTechnologies.map((technology, index) => (
            <div className={`code-pill pill-${index + 1}`} key={technology}>
              {technology}
            </div>
          ))}
          <div className="profile-orbit">
            <div className="profile-frame">
              <img src="https://avatars.githubusercontent.com/u/183949130?v=4" alt="Lúcio Júnior" />
            </div>
          </div>
          <a className="profile-link" href="#contato" aria-label="Entrar em contato">
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  )
}
