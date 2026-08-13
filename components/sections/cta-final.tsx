'use client';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
export function CtaFinal() {
  return (
    <section data-band="" className="band-dark cta-final">
      <div className="wrap reveal">
        <h2>Una valoración especializada es el primer paso</h2>
        <p>Ya sea que consulte por várices, trombosis, pie diabético, mala circulación o aneurismas de aorta, un diagnóstico preciso permite definir las mejores alternativas de tratamiento.</p>
        <div className="row">
          <a className="btn btn-amber btn-lg" href="/contacto">Agendar cita</a>
          <a
  className="btn btn-ghost btn-lg"
  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <span className="dot">
    <WhatsAppIcon />
  </span>
  WhatsApp
</a>
        </div>
      </div>
    </section>
  );
}
