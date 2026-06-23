import { ArrowDown, ArrowUpRight, Github } from 'lucide-react'

const whatsappUrl =
  'https://wa.me/5531988047534?text=Ol%C3%A1%2C%20L%C3%BAcio.%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20digital.'

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
            Disponível para novos projetos e parcerias
          </div>
          <p className="eyebrow">Olá, eu sou o Lúcio</p>
          <h1>
            Sistemas e sites para <span>negócios que precisam evoluir.</span>
          </h1>
          <p className="hero-text">
            Desenvolvedor Full Stack e professor, criando soluções para presença digital, registros internos,
            autenticação, relatórios e rotinas operacionais com clareza e segurança.
          </p>
          <div className="hero-actions">
            <a className="button" href="#solucoes">
              Ver soluções <ArrowDown size={18} />
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
            <a
              className="profile-frame"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Chamar Lúcio Júnior no WhatsApp"
            >
              <img src="https://avatars.githubusercontent.com/u/183949130?v=4" alt="Lúcio Júnior" />
            </a>
          </div>
          <a className="profile-link" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chamar no WhatsApp">
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  )
}
