'use client';

import { useEffect, useState, useCallback } from 'react';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { WhatsAppFloat } from '@/components/sections/whatsapp-float';
import { MobileMenu } from '@/components/sections/mobile-menu';
import { CtaFinal } from '@/components/sections/cta-final';

const articles = [
  { title: '¿Cuándo debo preocuparme por mis várices?', href: '/recursos/cuando-preocuparme-varices', desc: 'Conozca los síntomas que indican que sus várices necesitan atención médica especializada.' },
  { title: '¿Qué síntomas pueden indicar una trombosis?', href: '/recursos/sintomas-trombosis', desc: 'Identifique las señales de alerta de la trombosis venosa y cuándo buscar ayuda.' },
  { title: '¿Cuándo buscar ayuda por una herida que no cicatriza?', href: '/recursos/herida-no-cicatriza', desc: 'Las heridas que no cicatrizan pueden indicar problemas de circulación que requieren evaluación.' },
  { title: '¿Cómo prevenir una amputación en pacientes con diabetes?', href: '/recursos/prevenir-amputacion-diabetes', desc: 'Conozca las alternativas de tratamiento para pacientes con riesgo de pérdida de extremidad.' },
  { title: '¿Qué significa tener mala circulación en las piernas?', href: '/recursos/mala-circulacion-piernas', desc: 'Entienda las causas, síntomas y opciones de tratamiento para la mala circulación.' },
  { title: '¿Qué es un aneurisma de aorta y cuándo debo preocuparme?', href: '/recursos/aneurisma-aorta', desc: 'Información sobre aneurismas de aorta, factores de riesgo y cuándo consultar.' },
];

const delays = ['', 'd1', 'd2', '', 'd1', 'd2'];

export function RecursosFullPage() {
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

  return (
    <>
      <Header scrolled={scrolled} onBurgerClick={toggleMobile} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <section className="pad-hero">
        <div className="wrap">
          <a className="back" href="/">← Inicio</a>
          <span className="eyebrow"><span className="rule"></span>Recursos para pacientes</span>
          <h1>Artículos más consultados</h1>
          <p className="intro">Información clara y confiable sobre enfermedades vasculares, preparada por el Dr. Gabriel Hernández De Rubín para ayudarle a comprender mejor su condición.</p>
        </div>
      </section>

      <section data-band="" className="band-alt">
        <div className="wrap">
          <div className="articles">
            {articles?.map?.((a: any, i: number) => (
              <a className={`art reveal ${delays?.[i] ?? ''}`} href={a?.href ?? '#'} key={i}>
                <div style={{ flex: 1 }}>
                  <h3>{a?.title ?? ''}</h3>
                  <p style={{ fontSize: '.9rem', color: 'var(--text-2)', marginTop: '8px', marginBottom: 0 }}>{a?.desc ?? ''}</p>
                </div>
                <span className="arrow">→</span>
              </a>
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
