'use client';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
const DOCTOR_IMG = '/images/doctor-portrait.png';

const CheckSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6 9 17l-5-5" /></svg>
);

const CalendarSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
);

const chips = ['Várices', 'Trombosis venosa', 'Pie diabético', 'Heridas que no cicatrizan', 'Mala circulación', 'Aneurismas de aorta'];

const HospitalSvg = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" /></svg>
);

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <a className="mobile-banner" href="/contacto">
        <HospitalSvg />Agendar consulta
      </a>
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="rule"></span>Angiología · Cirugía Vascular y Endovascular
          </span>
          <h1>Dr. Gabriel <em>Hernández De Rubín</em></h1>
          <p className="lead">
            No todos los problemas de circulación requieren el mismo tratamiento. Un diagnóstico preciso es el primer paso para definir la mejor alternativa para cada paciente.
          </p>
          <div className="hero-chips">
            {chips?.map?.((c: string, i: number) => (
              <span className="chip" key={i}>
                <span className="tick"><CheckSvg /></span>{c}
              </span>
            ))}
          </div>
          <div className="hero-trust">
  <div style={{ textAlign: 'center' }}>
    <div className="stars">★★★★★</div>
    <div className="lbl">Doctoralia</div>
  </div>

  <div className="div"></div>

  <div className="txt">
    <strong>Opiniones verificadas</strong> de pacientes en Doctoralia
  </div>
</div>
          <div className="hero-actions">
            <a className="btn btn-primary btn-lg" href="/contacto">
              <CalendarSvg />Agendar cita
            </a>
            <a className="btn btn-wa btn-lg" href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''}`} target="_blank" rel="noopener noreferrer">
              <span className="dot"><WhatsAppIcon /></span>WhatsApp
            </a>
          </div>
        </div>
        <div className="hero-photo">
          <img src={DOCTOR_IMG} alt="Dr. Gabriel Hernández De Rubín en su consultorio" />
        </div>
      </div>
    </section>
  );
}
