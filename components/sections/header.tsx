'use client';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';

export function Header({ scrolled, onBurgerClick }: { scrolled: boolean; onBurgerClick: () => void }) {
  return (
    <header id="hdr" className={scrolled ? 'scrolled' : ''}>
      <div className="wrap nav">
        <a className="brand" href="/">
          <span className="mark"><img src="/images/logo-gh.svg" alt="Isotipo Dr. Gabriel Hernández De Rubín" /></span>
          <span>
            <b>Dr. Gabriel H. De Rubín</b>
            <small>Cirugía Vascular</small>
          </span>
        </a>
        <nav className="nav-links">
          <a href="/sobre-el-dr">Sobre el Dr.</a>
          <a href="/padecimientos">Padecimientos</a>
          <a href="/segunda-opinion">Segunda opinión</a>
          <a href="/recursos">Recursos</a>
          <a href="/contacto">Contacto</a>
        </nav>
        <div className="nav-cta">
          <a className="btn btn-wa" href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''}`} target="_blank" rel="noopener noreferrer">
            <span className="dot"><WhatsAppIcon /></span>WhatsApp
          </a>
          <a className="btn btn-primary" href="/contacto">Agendar cita</a>
        </div>
        <button className="burger" aria-label="Menú" onClick={onBurgerClick}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
