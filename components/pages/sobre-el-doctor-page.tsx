'use client';

import { useEffect, useState, useCallback } from 'react';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { WhatsAppFloat } from '@/components/sections/whatsapp-float';
import { MobileMenu } from '@/components/sections/mobile-menu';
import { CtaFinal } from '@/components/sections/cta-final';
import { TrayectoriaSection } from '@/components/sections/trayectoria-section';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
const DOCTOR_IMG = '/images/doctor-portrait.png';

const mediaVideos = [
  {
    id: 'rtIymhKIXPI',
    title: 'Consulta Directa: trombosis',
  },
  {
    id: 'Fsw9yQiFbjg',
    title: 'Consulta Directa: pie diabético',
  },
  {
    id: '8_ntCJ0MD9s',
    title: 'Participación en Consulta Directa',
  },
  {
    id: '2Ta95zGOXRc',
    title: 'Consulta Directa: várices',
  },
];

export function SobreElDoctorPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 10); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries: any) => { entries?.forEach?.((e: any) => { if (e?.isIntersecting) { e?.target?.classList?.add('in'); io?.unobserve?.(e?.target); } }); },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
      );
      els?.forEach?.((e: any) => io?.observe?.(e));
      return () => io?.disconnect?.();
    } else { els?.forEach?.((e: any) => e?.classList?.add('in')); }
  }, []);

  const toggleMobile = useCallback(() => setMobileOpen((p: boolean) => !p), []);
  const waUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''}`;

  return (
    <>
      <Header scrolled={scrolled} onBurgerClick={toggleMobile} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Hero con foto */}
      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="rule"></span>Angiología · Cirugía Vascular y Endovascular</span>
            <h1>Dr. Gabriel <em>Hernández De Rubín</em></h1>
            <p className="lead">Médico Cirujano con especialidad en Angiología, Cirugía Vascular y Cirugía Endovascular. Dedicado al diagnóstico y tratamiento de enfermedades arteriales, venosas y linfáticas.</p>
            <div className="hero-actions">
              <a className="btn btn-primary btn-lg" href="/contacto">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>Agendar cita
              </a>
              <a className="btn btn-wa btn-lg" href={waUrl} target="_blank" rel="noopener noreferrer">
               <span className="dot"><WhatsAppIcon /></span>WhatsApp
              </a>
            </div>
          </div>
          <div className="hero-photo">
            <img src={DOCTOR_IMG} alt="Dr. Gabriel Hernández De Rubín" />
          </div>
        </div>
      </section>

      {/* Formación */}
      <section data-band="" className="band-alt" id="formacion">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow"><span className="rule"></span>Formación académica</span>
            <h2>Trayectoria profesional</h2>
          </div>
          <div className="steps" style={{ marginTop: '32px' }}>
            <div className="step reveal"><span className="n">1</span><p><strong>Médico Cirujano</strong><br />U.N.A.M. · Cédula profesional: 5677044</p></div>
            <div className="step reveal d1"><span className="n">2</span><p><strong>Cirugía General</strong><br />U.N.A.M. · Cédula de especialista: 8226816</p></div>
            <div className="step reveal d2"><span className="n">3</span><p><strong>Angiología y Cirugía Vascular</strong><br />U.N.A.M. · Cédula de especialista: 09146060</p></div>
            <div className="step reveal"><span className="n">4</span><p><strong>Formación internacional</strong><br />Estancias clínicas especializadas, congresos y talleres de alta especialidad.</p></div>
          </div>
        </div>
      </section>

      {/* Experiencia y autoridad profesional — mismo contenido y diseño que en Home */}
      <TrayectoriaSection />

      {/* Especialidades */}
      <section data-band="" className="band-alt">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow"><span className="rule"></span>Áreas de atención</span>
            <h2>Especialidades</h2>
            <p>Atención integral de enfermedades del sistema circulatorio.</p>
          </div>
          <div className="cards" style={{ marginTop: '32px' }}>
            {[
              { title: 'Enfermedades venosas', desc: 'Várices, insuficiencia venosa, trombosis venosa profunda y superficial.', href: '/padecimientos/varices' },
              { title: 'Aneurismas de aorta', desc: 'Diagnóstico, vigilancia y tratamiento endovascular de aneurismas complejos.', href: '/padecimientos/aneurismas' },
              { title: 'Pie diabético', desc: 'Evaluación vascular, curación de heridas, revascularización.', href: '/padecimientos/pie-diabetico' },
              { title: 'Salvamento de extremidad', desc: 'Alternativas a la amputación, segunda opinión especializada.', href: '/padecimientos/salvamento-extremidad' },
              { title: 'Cirugía endovascular', desc: 'Procedimientos mínimamente invasivos con tecnología avanzada.', href: '/#complejas' },
              { title: 'Enfermedades arteriales', desc: 'Enfermedad arterial periférica, aterosclerosis y otros trastornos de la circulación arterial.', href: '/padecimientos/enfermedad-arterial-periferica' },
            ]?.map?.((c: any, i: number) => (
              <a className={`card reveal ${['', 'd1', 'd2', '', 'd1', 'd2']?.[i] ?? ''}`} href={c?.href ?? '#'} key={i}>
                <div className="top">
                  <h3>{c?.title ?? ''}</h3>
                  <span className="arrow">→</span>
                </div>
                <p>{c?.desc ?? ''}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section data-band="" className="band-dark">
        <div className="wrap">
          <div className="sec-head reveal" style={{ maxWidth: '56ch' }}>
            <span className="eyebrow mint"><span className="rule"></span>Filosofía de atención</span>
            <h2 style={{ color: '#fff' }}>Un enfoque centrado en el paciente</h2>
            <p style={{ color: '#CFE0D5', fontSize: '1.1rem', lineHeight: 1.7, marginTop: '20px' }}>
              Cada paciente merece una explicación clara de su condición y las alternativas de tratamiento disponibles. 
              La medicina vascular ha avanzado significativamente, y muchos procedimientos que antes requerían cirugía 
              abierta hoy pueden realizarse de forma mínimamente invasiva.
            </p>
            <p style={{ color: '#CFE0D5', fontSize: '1.1rem', lineHeight: 1.7, marginTop: '16px' }}>
              Mi compromiso es brindar una atención honesta, actualizada y personalizada, buscando siempre 
              la mejor alternativa para cada paciente.
            </p>
          </div>
        </div>
      </section>

      {/* Participaciones en medios */}
      <section data-band="" className="band-alt media-participations" id="medios">
        <div className="wrap">
          <div className="sec-head reveal media-participations-head">
            <span className="eyebrow">
              <span className="rule"></span>
              Divulgación médica
            </span>
            <h2>Participaciones en medios</h2>
            <p>
              A lo largo de mi trayectoria he participado como invitado en programas de televisión y espacios de divulgación médica para hablar sobre prevención, diagnóstico y tratamiento de enfermedades vasculares.
            </p>
          </div>

          <div className="media-video-grid">
            {mediaVideos.map((video, index) => (
              <article
                className={`media-video-card reveal ${['', 'd1', 'd2', '', 'd1'][index] ?? ''}`}
                key={video.id}
              >
                <div className="media-video-frame">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="media-video-body">
                  <span>Participación en medios</span>
                  <h3>{video.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaFinal />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
