'use client';

import { useEffect, useState, useCallback } from 'react';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { WhatsAppFloat } from '@/components/sections/whatsapp-float';
import { MobileMenu } from '@/components/sections/mobile-menu';
import { UbicacionesSection } from '@/components/sections/ubicaciones-section';

export function ContactoFullPage() {
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
          <span className="eyebrow"><span className="rule"></span>Contacto y ubicaciones</span>
          <h1>Agende su cita</h1>
        </div>
      </section>

      <UbicacionesSection />

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
