'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Header } from '@/components/sections/header';
import { HeroSection } from '@/components/sections/hero-section';
import { PadecimientosSection } from '@/components/sections/padecimientos-section';
import { SegundaOpinionSection } from '@/components/sections/segunda-opinion-section';
import { DoctoraliaSplit } from '@/components/sections/doctoralia-split';
import { TrayectoriaSection } from '@/components/sections/trayectoria-section';
import { ExperienciaCompleja } from '@/components/sections/experiencia-compleja';
import { UbicacionesSection } from '@/components/sections/ubicaciones-section';
import { RecursosSection } from '@/components/sections/recursos-section';
import { CtaFinal } from '@/components/sections/cta-final';
import { Footer } from '@/components/sections/footer';
import { WhatsAppFloat } from '@/components/sections/whatsapp-float';
import { MobileMenu } from '@/components/sections/mobile-menu';

export function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Reveal animation
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
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
      );
      els?.forEach?.((e: any) => io?.observe?.(e));
      return () => io?.disconnect?.();
    } else {
      els?.forEach?.((e: any) => e?.classList?.add('in'));
    }
  }, []);

  const toggleMobile = useCallback(() => setMobileOpen((p: boolean) => !p), []);

  return (
    <>
      <Header scrolled={scrolled} onBurgerClick={toggleMobile} />
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <main>
        <HeroSection />
        <PadecimientosSection />
        <SegundaOpinionSection />
        <DoctoraliaSplit />
        <TrayectoriaSection />
        <ExperienciaCompleja />
        <UbicacionesSection />
        <RecursosSection />
        <CtaFinal />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
