import { Menu, X } from 'lucide-react'
import { useState } from 'react'
const links = [{ href: '#sobre', label: 'Sobre' }, { href: '#projetos', label: 'Projetos' }, { href: '#contato', label: 'Contato' }]
export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return <header className="site-header"><nav className="container nav" aria-label="Navegação principal">
    <a className="brand" href="#inicio" aria-label="Ir para o início"><span className="brand-mark">&lt;LJ /&gt;</span><span>Lúcio Júnior</span></a>
    <button className="menu-button" type="button" aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={isOpen} aria-controls="main-menu" onClick={() => setIsOpen(open => !open)}>{isOpen ? <X /> : <Menu />}</button>
    <div className={`nav-links ${isOpen ? 'is-open' : ''}`} id="main-menu">{links.map(link => <a href={link.href} key={link.href} onClick={() => setIsOpen(false)}>{link.label}</a>)}<a className="button button-small" href="#contato" onClick={() => setIsOpen(false)}>Vamos conversar</a></div>
  </nav></header>
}
