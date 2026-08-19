'use client';

import { useEffect, useState, useCallback } from 'react';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { WhatsAppFloat } from '@/components/sections/whatsapp-float';
import { MobileMenu } from '@/components/sections/mobile-menu';
import { CtaFinal } from '@/components/sections/cta-final';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
export function SegundaOpinionPage() {
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

      {/* Hero */}
      <section className="band-dark segunda" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <span className="halo a"></span>
        <span className="halo b"></span>
        <div className="wrap segunda-in">
          <div className="reveal">
            <span className="eyebrow mint"><span className="rule"></span>Segunda opinión especializada</span>
            <h1 style={{ color: '#fff', fontSize: 'clamp(1.8rem,4vw,2.6rem)', lineHeight: 1.2, marginBottom: '20px' }}>Si le han propuesto una amputación o le han diagnosticado una enfermedad vascular compleja</h1>
            <p style={{ color: '#CFE0D5', fontSize: '1.1rem', lineHeight: 1.7 }}>Una segunda opinión especializada puede ayudarle a comprender mejor su situación y conocer las alternativas disponibles. La evaluación temprana suele ofrecer mayores oportunidades de tratamiento.</p>
          </div>
          <div className="side reveal d1">
            <a className="btn btn-amber btn-lg" href="/contacto">Solicitar valoración →</a>
            <a className="btn btn-ghost btn-lg" href={waUrl} target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,.08)', color: '#EAF3EC', borderColor: 'rgba(255,255,255,.25)' }}>
  <span className="dot"><WhatsAppIcon /></span>WhatsApp
</a>
          </div>
        </div>
      </section>

      {/* Cuándo buscar */}
      <section data-band="" className="band-alt">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow"><span className="rule"></span>¿Cuándo buscar una segunda opinión?</span>
            <h2>Situaciones frecuentes</h2>
          </div>
          <div className="cards" style={{ marginTop: '32px' }}>
            {[
              { title: 'Propuesta de amputación', desc: 'Si le han indicado que la amputación es la única opción, una evaluación vascular completa puede identificar alternativas.' },
              { title: 'Herida que no cicatriza', desc: 'Las heridas crónicas en piernas o pies pueden tener un componente vascular tratable.' },
              { title: 'Diagnóstico de enfermedad vascular compleja', desc: 'Un segundo especialista puede ofrecer perspectivas y opciones de tratamiento adicionales.' },
              { title: 'Dolor en las piernas al caminar', desc: 'La claudicación intermitente puede indicar enfermedad arterial periférica que requiere evaluación.' },
              { title: 'Aneurisma diagnosticado', desc: 'Conozca todas las opciones de tratamiento y vigilancia disponibles para su caso.' },
              { title: 'Trombosis recurrente', desc: 'Si ha tenido múltiples episodios de trombosis, una evaluación especializada puede identificar la causa.' },
            ]?.map?.((c: any, i: number) => (
              <div className={`card reveal ${['', 'd1', 'd2', '', 'd1', 'd2']?.[i] ?? ''}`} key={i}>
                <div className="top">
                  <h3>{c?.title ?? ''}</h3>
                </div>
                <p>{c?.desc ?? ''}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section data-band="">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow"><span className="rule"></span>¿Cómo funciona?</span>
            <h2>Proceso de segunda opinión</h2>
          </div>
          <div className="steps" style={{ marginTop: '32px' }}>
            <div className="step reveal"><span className="n">1</span><p><strong>Contacto inicial</strong><br />Comuníquese por WhatsApp o formulario para agendar una valoración.</p></div>
            <div className="step reveal d1"><span className="n">2</span><p><strong>Evaluación completa</strong><br />Revisión de su historial, estudios previos y exploración física especializada.</p></div>
            <div className="step reveal d2"><span className="n">3</span><p><strong>Plan de tratamiento</strong><br />Explicación clara de su diagnóstico, las alternativas disponibles y la recomendación personalizada.</p></div>
          </div>
        </div>
      </section>

      <CtaFinal />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
