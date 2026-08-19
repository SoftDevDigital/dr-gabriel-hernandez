'use client';

import { PadecimientoPage } from '@/components/padecimiento-page';

const tocItems = [
  { id: 'quees', label: '¿Qué es?' },
  { id: 'sintomas', label: 'Síntomas' },
  { id: 'alerta', label: '¿Cuándo consultar?' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'tratamiento', label: 'Tratamiento' },
  { id: 'preguntas', label: 'Preguntas' },
];

export function TrombosisPage() {
  return (
    <PadecimientoPage
      title="Trombosis venosa"
      empathy="Atención oportuna para proteger su salud vascular."
      intro="La trombosis venosa es la formación de un coágulo dentro de una vena, generalmente en las piernas. Puede causar dolor, inflamación y, en algunos casos, complicaciones graves como la embolia pulmonar. Una evaluación especializada permite un diagnóstico oportuno y un plan de tratamiento adecuado."
      tocItems={tocItems}
      ctaTitle="Agende una valoración especializada"
      ctaText="Si presenta hinchazón, dolor o enrojecimiento en una pierna, es importante buscar atención especializada de forma oportuna."
    >
      {/* Qué es */}
      <div className="block reveal" id="quees">
        <span className="eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></svg>
          Información
        </span>
        <h2>¿Qué es la trombosis venosa?</h2>
        <p>La trombosis venosa ocurre cuando se forma un coágulo sanguíneo (trombo) dentro de una vena, generalmente en las piernas. Existen dos tipos principales:</p>
        <div className="sym-grid" id="sintomas">
          {[
            { label: 'Trombosis venosa profunda (TVP)', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg> },
            { label: 'Trombosis venosa superficial', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M9 3c0 4-3 5-3 9s3 5 3 9M15 3c0 4 3 5 3 9s-3 5-3 9" /></svg> },
            { label: 'Hinchazón de la pierna', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 14c2-3 5-3 8 0s6 3 8 0" /><path d="M4 9c2-3 5-3 8 0s6 3 8 0" /></svg> },
            { label: 'Dolor e inflamación', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z" /><path d="M12 8v4" /></svg> },
            { label: 'Enrojecimiento', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 0 0 18" /></svg> },
            { label: 'Sensación de calor', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3v10M12 21a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4Z" /></svg> },
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
          <p>Acuda de manera urgente si presenta:</p>
          <ul className="alert-list">
            {['Hinchazón repentina en una pierna', 'Dolor intenso en la pantorrilla o muslo', 'Enrojecimiento o cambio de coloración', 'Sensación de calor localizado', 'Dificultad para respirar (posible embolia pulmonar)', 'Dolor en el pecho al respirar', 'Antecedentes de cirugía reciente o inmovilización']?.map?.((item: string, i: number) => (
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
        <h2>¿Cómo se diagnostica la trombosis?</h2>
        <div className="steps">
          <div className="step"><span className="n">1</span><p>Evaluación clínica completa, incluyendo historia médica y factores de riesgo.</p></div>
          <div className="step"><span className="n">2</span><p>Ultrasonido Doppler vascular para visualizar el flujo sanguíneo y detectar la presencia de coágulos.</p></div>
          <div className="step"><span className="n">3</span><p>En algunos casos, estudios complementarios como dímero D o angiotomografía.</p></div>
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
          El tratamiento depende del tipo y la localización de la trombosis.
        </div>
        <div className="tx-groups">
          <div className="tx-card">
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z" /></svg></span>
            <h3>Tratamiento anticoagulante</h3>
            <ul><li>Medicamentos para prevenir la extensión del coágulo</li><li>Control y seguimiento médico</li><li>Medias de compresión</li></ul>
          </div>
          <div className="tx-card">
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14 4 4 14v6h6L20 10Z" /><path d="m13 5 6 6" /></svg></span>
            <h3>Procedimientos mínimamente invasivos</h3>
            <ul><li>Trombolisis dirigida por catéter</li><li>Trombectomía mecánica</li><li>Colocación de filtro de vena cava</li></ul>
          </div>
          <div className="tx-card">
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 3v6l-4 8a3 3 0 0 0 3 4h8a3 3 0 0 0 3-4l-4-8V3" /><path d="M8 3h8" /></svg></span>
            <h3>Prevención de recurrencia</h3>
            <ul><li>Seguimiento a largo plazo</li><li>Evaluación de factores de riesgo</li><li>Plan personalizado</li></ul>
          </div>
        </div>
        <p className="tx-close">El objetivo es resolver la trombosis y prevenir complicaciones como la embolia pulmonar.</p>
      </div>

      {/* Preguntas frecuentes */}
      <div className="block reveal" id="preguntas">
        <span className="eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .8-1 1.7M12 17h.01" /></svg>
          Preguntas frecuentes
        </span>
        <h2>Preguntas frecuentes</h2>
        <div className="faq">
          <div className="faq-item"><h3>¿La trombosis venosa es peligrosa?</h3><p>Sí. Si no se trata, un coágulo puede desprenderse y viajar a los pulmones, causando una embolia pulmonar, que puede poner en riesgo la vida.</p></div>
          <div className="faq-item"><h3>¿Quiénes tienen mayor riesgo?</h3><p>Personas con cirugías recientes, inmovilización prolongada, uso de anticonceptivos, embarazo, cáncer, trastornos de coagulación u obesidad.</p></div>
          <div className="faq-item"><h3>¿Se puede prevenir la trombosis?</h3><p>En muchos casos, sí. Medidas como la movilización temprana después de una cirugía, el uso de medias de compresión y la hidratación adecuada ayudan a reducir el riesgo.</p></div>
          <div className="faq-item"><h3>¿Qué especialista trata la trombosis?</h3><p>La trombosis venosa es tratada por médicos especialistas en angiología y cirugía vascular.</p></div>
        </div>
      </div>
    </PadecimientoPage>
  );
}
