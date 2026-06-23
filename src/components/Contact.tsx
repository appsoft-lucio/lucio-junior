import { ArrowUpRight, Github, Linkedin, MessageCircle } from 'lucide-react'

export function Contact() {
  return (
    <section className="section contact-section" id="contato">
      <div className="container contact-card">
        <div>
          <p className="eyebrow">Vamos conversar?</p>
          <h2>Posso entender a necessidade da sua empresa e propor um caminho.</h2>
          <p>
            Me conte se a prioridade é site, sistema interno, registro de ocorrências, relatórios, automação ou
            integração. Eu retorno com próximos passos claros e uma visão honesta do que faz sentido construir.
          </p>
        </div>
        <div className="contact-actions">
          <a
            className="button"
            href="https://wa.me/5531988047534?text=Ol%C3%A1%2C%20L%C3%BAcio.%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20digital%20para%20minha%20empresa."
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={19} />
            Chamar no WhatsApp
            <ArrowUpRight size={18} />
          </a>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/lucio-junior-a258b7203/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
            <a href="https://github.com/appsoft-lucio" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
