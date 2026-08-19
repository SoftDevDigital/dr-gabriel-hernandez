'use client';

import { useEffect, useState, useCallback } from 'react';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { WhatsAppFloat } from '@/components/sections/whatsapp-float';
import { MobileMenu } from '@/components/sections/mobile-menu';

export function VaricesPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('quees');

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries: any) => {
          entries?.forEach?.((e: any) => {
            if (e?.isIntersecting) {
              e?.target?.classList?.add('in');
              io?.unobserve?.(e?.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
      );
      els?.forEach?.((e: any) => io?.observe?.(e));
      return () => io?.disconnect?.();
    } else {
      els?.forEach?.((e: any) => e?.classList?.add('in'));
    }
  }, []);

  // TOC active tracking
  useEffect(() => {
    const tocLinks = ['quees', 'sintomas', 'alerta', 'diagnostico', 'tratamiento', 'preguntas'];
    function onScroll() {
      const y = window.scrollY + 140;
      let current = tocLinks[0] ?? 'quees';
      tocLinks?.forEach?.((id: string) => {
        const el = document.getElementById(id);
        if (el && el?.offsetTop <= y) {
          current = id;
        }
      });
      setActiveSection(current);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMobile = useCallback(() => setMobileOpen((p: boolean) => !p), []);

  const tocItems = [
    { id: 'quees', label: '¿Qué es?' },
    { id: 'sintomas', label: 'Síntomas' },
    { id: 'alerta', label: '¿Cuándo consultar?' },
    { id: 'diagnostico', label: 'Diagnóstico' },
    { id: 'tratamiento', label: 'Tratamiento' },
    { id: 'preguntas', label: 'Preguntas' },
  ];

  return (
    <>
      <Header scrolled={scrolled} onBurgerClick={toggleMobile} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <section className="pad-hero">
        <div className="wrap">
          <a className="back" href="/">← Padecimientos</a><span aria-hidden="true" className="breadcrumb-gap"></span><span className="eyebrow">Angiología · Cirugía Vascular</span>
          <h1>Tratamiento especializado de várices</h1>
          <p className="empathy">Recupere la comodidad y la salud de sus piernas.</p>
          <p className="intro">Las várices pueden causar pesadez, dolor, inflamación, cambios en la piel y afectar la calidad de vida. Una valoración especializada permite identificar la causa del problema y determinar las alternativas de tratamiento más adecuadas para cada paciente.</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="/#ubicaciones">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>Agendar cita
            </a>
            <a className="btn btn-wa" href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''}`} target="_blank" rel="noopener noreferrer"><span className="dot"></span>WhatsApp</a>
            <a className="btn btn-ghost" href="/#doctoralia">Ver opiniones</a>
          </div>
        </div>
      </section>

      <section className="body-sec">
        <div className="wrap grid-pad">
          <aside className="toc" id="toc">
            <div className="toc-label">En esta página</div>
            {tocItems?.map?.((item: any) => (
              <a key={item?.id} href={`#${item?.id}`} className={activeSection === item?.id ? 'active' : ''}>
                {item?.label ?? ''}
              </a>
            ))}
          </aside>

          <div className="content">
            {/* Qué es */}
            <div className="block reveal" id="quees">
              <span className="eyebrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></svg>
                Información
              </span>
              <h2>¿Qué son las várices?</h2>
              <p>Las várices son venas que han perdido parte de su capacidad para transportar la sangre de manera eficiente hacia el corazón. Como consecuencia, la sangre tiende a acumularse en las piernas y pueden aparecer síntomas como:</p>

              <div className="sym-grid" id="sintomas">
                {[
                  { label: 'Pesadez', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3v10M12 21a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4Z" /></svg> },
                  { label: 'Dolor', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z" /><path d="M12 8v4" /></svg> },
                  { label: 'Cansancio', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg> },
                  { label: 'Hinchazón', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 14c2-3 5-3 8 0s6 3 8 0" /><path d="M4 9c2-3 5-3 8 0s6 3 8 0" /></svg> },
                  { label: 'Calambres', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m6 4 3 6-4 3 5 7" /><path d="m18 4-3 6 4 3-5 7" /></svg> },
                  { label: 'Comezón', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M8 13c0-4 8-4 8 0M6 13h12M9 17c1 1.5 5 1.5 6 0" /></svg> },
                  { label: 'Cambios de coloración', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 0 0 18" /></svg> },
                  { label: 'Úlceras en casos avanzados', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10Z" /><circle cx="12" cy="10" r="2.2" /></svg> },
                ]?.map?.((s: any, i: number) => (
                  <div className="sym reveal" key={i}>
                    <span className="ic">{s?.icon}</span>
                    <span className="sym-label">{s?.label ?? ''}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cuándo consultar */}
            <div className="block reveal" id="alerta">
              <div className="alert">
                <span className="eyebrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17h.01" /></svg>
                  Señales de alerta
                </span>
                <h2>¿Cuándo debe buscar atención médica?</h2>
                <p>No todas las várices requieren el mismo tratamiento. Sin embargo, es recomendable una valoración si presenta:</p>
                <ul className="alert-list">
                  {['Dolor frecuente en las piernas', 'Inflamación de piernas', 'Sensación de pesadez', 'Cambios en la piel', 'Episodios de sangrado', 'Antecedentes de trombosis', 'Heridas o úlceras cerca del tobillo']?.map?.((item: string, i: number) => (
                    <li key={i}>
                      <svg className="warn" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 8v4M12 16h.01" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Diagnóstico */}
            <div className="block reveal" id="diagnostico">
              <span className="eyebrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
                Diagnóstico
              </span>
              <h2>¿Cómo se realiza el diagnóstico?</h2>
              <div className="steps">
                <div className="step"><span className="n">1</span><p>El primer paso consiste en una evaluación clínica completa.</p></div>
                <div className="step"><span className="n">2</span><p>En muchos casos se complementa con un ultrasonido Doppler vascular, que permite analizar el funcionamiento de las venas y planificar el tratamiento más adecuado.</p></div>
              </div>
            </div>

            {/* Tratamiento */}
            <div className="block reveal" id="tratamiento">
              <span className="eyebrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3v18M3 12h18" /><circle cx="12" cy="12" r="9" /></svg>
                Tratamiento
              </span>
              <h2>Opciones de tratamiento</h2>
              <div className="tx-note">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 6 9 17l-5-5" /></svg>
                No todos los pacientes requieren cirugía.
              </div>
              <div className="tx-groups">
                <div className="tx-card">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z" /></svg></span>
                  <h3>Medidas conservadoras</h3>
                  <ul><li>Medias de compresión</li><li>Cambios en hábitos</li><li>Ejercicio</li></ul>
                </div>
                <div className="tx-card">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14 4 4 14v6h6L20 10Z" /><path d="m13 5 6 6" /></svg></span>
                  <h3>Mínimamente invasivos</h3>
                  <ul><li>Escleroterapia</li><li>Tratamientos térmicos</li><li>Técnicas endovenosas</li></ul>
                </div>
                <div className="tx-card">
                  <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 3v6l-4 8a3 3 0 0 0 3 4h8a3 3 0 0 0 3-4l-4-8V3" /><path d="M8 3h8" /></svg></span>
                  <h3>Tratamientos quirúrgicos</h3>
                  <ul><li>Cuando están indicados</li></ul>
                </div>
              </div>
              <p className="tx-close">El objetivo es seleccionar la alternativa más adecuada para cada paciente.</p>
            </div>

            {/* Preguntas frecuentes */}
            <div className="block reveal" id="preguntas">
              <span className="eyebrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .8-1 1.7M12 17h.01" /></svg>
                Preguntas frecuentes
              </span>
              <h2>Preguntas frecuentes</h2>
              <div className="faq">
                <div className="faq-item"><h3>¿Las várices son solamente un problema estético?</h3><p>No siempre. Muchas personas presentan síntomas importantes e incluso complicaciones asociadas.</p></div>
                <div className="faq-item"><h3>¿Las várices pueden reaparecer?</h3><p>Sí. Las enfermedades venosas son crónicas. Un tratamiento adecuado y el seguimiento médico ayudan a mantener buenos resultados a largo plazo.</p></div>
                <div className="faq-item"><h3>¿Necesito cirugía para tratar mis várices?</h3><p>No necesariamente. Existen diferentes alternativas y la elección depende de las características de cada paciente.</p></div>
                <div className="faq-item"><h3>¿Qué especialista trata las várices?</h3><p>Las várices son tratadas por médicos especialistas en angiología y cirugía vascular.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="pad-cta-final">
        <div className="wrap reveal">
          <h2>Agende una valoración especializada</h2>
          <p>Si presenta várices, pesadez, dolor o inflamación en las piernas, una evaluación oportuna puede ayudar a identificar las causas y definir las mejores alternativas de tratamiento.</p>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <a className="btn btn-primary" href="/#ubicaciones">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>Agendar cita
            </a>
            <a className="btn btn-ghost" href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''}`} target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,.35)' }}>
              <span className="dot" style={{ width: '15px', height: '15px', borderRadius: '50%', background: 'var(--wa)', display: 'inline-block' }}></span>&nbsp;WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
