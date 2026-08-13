'use client';

import { useEffect, useState, useCallback } from 'react';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { WhatsAppFloat } from '@/components/sections/whatsapp-float';
import { MobileMenu } from '@/components/sections/mobile-menu';

export interface TocItem {
  id: string;
  label: string;
}

export interface PadecimientoPageProps {
  title: string;
  empathy: string;
  intro: string;
  tocItems: TocItem[];
  children: React.ReactNode;
  ctaTitle: string;
  ctaText: string;
}

export function PadecimientoPage({ title, empathy, intro, tocItems, children, ctaTitle, ctaText }: PadecimientoPageProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(tocItems?.[0]?.id ?? '');

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

  useEffect(() => {
    const ids = tocItems?.map?.((t: TocItem) => t?.id) ?? [];
    function onScroll() {
      const y = window.scrollY + 140;
      let current = ids?.[0] ?? '';
      ids?.forEach?.((id: string) => {
        const el = document.getElementById(id);
        if (el && el?.offsetTop <= y) current = id;
      });
      setActiveSection(current);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [tocItems]);

  const toggleMobile = useCallback(() => setMobileOpen((p: boolean) => !p), []);
  const waUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''}`;

  return (
    <>
      <Header scrolled={scrolled} onBurgerClick={toggleMobile} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <section className="pad-hero">
        <div className="wrap">
          <a className="back" href="/#padecimientos">← Padecimientos</a><span aria-hidden="true" className="breadcrumb-gap"></span><span className="eyebrow">Angiología · Cirugía Vascular</span>
          <h1>{title}</h1>
          <p className="empathy">{empathy}</p>
          <p className="intro">{intro}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="/#ubicaciones">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>Agendar cita
            </a>
            <a className="btn btn-wa" href={waUrl} target="_blank" rel="noopener noreferrer"><span className="dot"></span>WhatsApp</a>
            <a className="btn btn-ghost" href="/#doctoralia">Ver opiniones</a>
          </div>
        </div>
      </section>

      <section className="body-sec">
        <div className="wrap grid-pad">
          <aside className="toc" id="toc">
            <div className="toc-label">En esta página</div>
            {tocItems?.map?.((item: TocItem) => (
              <a key={item?.id} href={`#${item?.id}`} className={activeSection === item?.id ? 'active' : ''}>
                {item?.label ?? ''}
              </a>
            ))}
          </aside>
          <div className="content">
            {children}
          </div>
        </div>
      </section>

      <section className="pad-cta-final">
        <div className="wrap reveal">
          <h2>{ctaTitle}</h2>
          <p>{ctaText}</p>
          <div className="hero-cta" style={{ justifyContent: 'center' }}>
            <a className="btn btn-primary" href="/#ubicaciones">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>Agendar cita
            </a>
            <a className="btn btn-ghost" href={waUrl} target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,.35)' }}>
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
