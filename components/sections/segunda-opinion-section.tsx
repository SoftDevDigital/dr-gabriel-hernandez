'use client';
import { WhatsAppIcon } from '@/components/icons/whatsapp-icon';
export function SegundaOpinionSection() {
  return (
    <section data-band="" className="band-dark segunda" id="segunda">
      <span className="halo a"></span>
      <span className="halo b"></span>
      <div className="wrap segunda-in">
        <div className="reveal">
          <span className="eyebrow mint"><span className="rule"></span>Segunda opinión especializada</span>
          <h2>Si le han propuesto una amputación o le han diagnosticado una enfermedad vascular compleja</h2>
          <p>Una segunda opinión especializada puede ayudarle a comprender mejor su situación y conocer las alternativas disponibles. La evaluación temprana suele ofrecer mayores oportunidades de tratamiento.</p>
        </div>
        <div className="side reveal d1">
          <a className="btn btn-amber btn-lg" href="/contacto">Solicitar valoración →</a>
          <a className="btn btn-ghost btn-lg" href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''}`} target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,.08)', color: '#EAF3EC', borderColor: 'rgba(255,255,255,.25)' }}>
  <span className="dot"><WhatsAppIcon /></span>WhatsApp
</a>
        </div>
      </div>
    </section>
  );
}
