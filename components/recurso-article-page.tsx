'use client';

import { useEffect, useState, useCallback } from 'react';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { WhatsAppFloat } from '@/components/sections/whatsapp-float';
import { MobileMenu } from '@/components/sections/mobile-menu';
import { CtaFinal } from '@/components/sections/cta-final';

interface ArticleData {
  title: string;
  intro: string;
  relatedHref: string;
  relatedLabel: string;
  sections: { heading: string; content: string }[];
}

export function RecursoArticlePage({ article }: { article: ArticleData }) {
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
          <a className="back" href="/recursos">← Recursos</a>
          <span className="eyebrow"><span className="rule"></span>Recursos para pacientes</span>
          <h1>{article?.title ?? ''}</h1>
          <p className="intro">{article?.intro ?? ''}</p>
        </div>
      </section>

      <section data-band="">
        <div className="wrap" style={{ maxWidth: '48rem' }}>
          {article?.sections?.map?.((s: any, i: number) => (
            <div className="reveal" key={i} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontSize: 'clamp(1.3rem,2.5vw,1.6rem)', marginBottom: '16px' }}>{s?.heading ?? ''}</h2>
              <div style={{ lineHeight: 1.8, color: 'var(--text-2)' }} dangerouslySetInnerHTML={{ __html: s?.content ?? '' }} />
            </div>
          ))}

          <div className="reveal" style={{ marginTop: '48px', padding: '24px', background: 'var(--bg-alt)', borderRadius: 'var(--r)', border: '1px solid var(--line)' }}>
            <p style={{ margin: 0, fontSize: '.95rem', color: 'var(--text-2)' }}>
              <strong>Consulte al especialista:</strong> Este artículo es informativo y no sustituye la consulta médica. Si presenta síntomas, agende una cita con el Dr. Hernández De Rubín.
            </p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a className="btn btn-primary" href="/contacto">Agendar cita</a>
              <a className="btn btn-ghost" href={article?.relatedHref ?? '#'}>{article?.relatedLabel ?? 'Ver más'} →</a>
            </div>
          </div>
        </div>
      </section>

      <CtaFinal />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
