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

export function PieDiabeticoPage() {
  return (
    <PadecimientoPage
      title="Pie diabético y heridas que no cicatrizan"
      empathy="Atención especializada para proteger sus extremidades."
      intro="El pie diabético es una complicación frecuente de la diabetes que puede producir heridas de difícil cicatrización, infecciones y, en casos avanzados, riesgo de amputación. Una evaluación vascular oportuna es fundamental para identificar alternativas de tratamiento y preservar la extremidad."
      tocItems={tocItems}
      ctaTitle="Agende una valoración especializada"
      ctaText="Si vive con diabetes y presenta heridas en los pies, cambios de coloración o dolor, una evaluación vascular oportuna puede hacer la diferencia."
    >
      <div className="block reveal" id="quees">
        <span className="eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></svg>
          Información
        </span>
        <h2>¿Qué es el pie diabético?</h2>
        <p>El pie diabético es un conjunto de alteraciones que afectan los pies de personas con diabetes. La combinación de daño a los nervios (neuropatía), mala circulación (enfermedad arterial) y mayor susceptibilidad a infecciones puede provocar heridas que no cicatrizan adecuadamente.</p>
        <div className="sym-grid" id="sintomas">
          {[
            { label: 'Heridas que no cicatrizan', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10Z" /><circle cx="12" cy="10" r="2.2" /></svg> },
            { label: 'Pérdida de sensibilidad', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M8 13c0-4 8-4 8 0M6 13h12M9 17c1 1.5 5 1.5 6 0" /></svg> },
            { label: 'Cambios de coloración', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 0 0 18" /></svg> },
            { label: 'Pies fríos', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3v10M12 21a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4Z" /></svg> },
            { label: 'Dolor al caminar', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z" /><path d="M12 8v4" /></svg> },
            { label: 'Infecciones recurrentes', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m6 4 3 6-4 3 5 7" /><path d="m18 4-3 6 4 3-5 7" /></svg> },
          ]?.map?.((s: any, i: number) => (
            <div className="sym reveal" key={i}>
              <span className="ic">{s?.icon}</span>
              <span className="sym-label">{s?.label ?? ''}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="block reveal" id="alerta">
        <div className="alert">
          <span className="eyebrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17h.01" /></svg>
            Señales de alerta
          </span>
          <h2>¿Cuándo debe buscar atención médica?</h2>
          <p>Consulte de manera urgente si presenta:</p>
          <ul className="alert-list">
            {['Herida en el pie que no mejora en 2 semanas', 'Enrojecimiento, calor o inflamación alrededor de una herida', 'Secreción con mal olor', 'Cambio de coloración en dedos o pie (pálido, azulado o negro)', 'Fiebre o malestar general', 'Le han propuesto una amputación', 'Dolor en reposo en el pie o los dedos']?.map?.((item: string, i: number) => (
              <li key={i}>
                <svg className="warn" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 8v4M12 16h.01" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="block reveal" id="diagnostico">
        <span className="eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
          Diagnóstico
        </span>
        <h2>¿Cómo se evalúa el pie diabético?</h2>
        <div className="steps">
          <div className="step"><span className="n">1</span><p>Evaluación clínica integral del pie y la circulación.</p></div>
          <div className="step"><span className="n">2</span><p>Ultrasonido Doppler vascular para evaluar el flujo sanguíneo en las arterias de las piernas.</p></div>
          <div className="step"><span className="n">3</span><p>Evaluación de la neuropatía y factores de riesgo asociados.</p></div>
          <div className="step"><span className="n">4</span><p>Estudios complementarios según sea necesario (angiotomografía, angiografía).</p></div>
        </div>
      </div>

      <div className="block reveal" id="tratamiento">
        <span className="eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3v18M3 12h18" /><circle cx="12" cy="12" r="9" /></svg>
          Tratamiento
        </span>
        <h2>Opciones de tratamiento</h2>
        <div className="tx-note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 6 9 17l-5-5" /></svg>
          Muchas amputaciones pueden prevenirse con una evaluación oportuna.
        </div>
        <div className="tx-groups">
          <div className="tx-card">
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z" /></svg></span>
            <h3>Cuidado de heridas</h3>
            <ul><li>Curaciones especializadas</li><li>Control de infección</li><li>Descarga del pie afectado</li></ul>
          </div>
          <div className="tx-card">
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14 4 4 14v6h6L20 10Z" /><path d="m13 5 6 6" /></svg></span>
            <h3>Revascularización</h3>
            <ul><li>Angioplastia y stent</li><li>Cirugía de bypass vascular</li><li>Procedimientos híbridos</li></ul>
          </div>
          <div className="tx-card">
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 3v6l-4 8a3 3 0 0 0 3 4h8a3 3 0 0 0 3-4l-4-8V3" /><path d="M8 3h8" /></svg></span>
            <h3>Manejo integral</h3>
            <ul><li>Control metabólico</li><li>Equipo multidisciplinario</li><li>Prevención de recurrencia</li></ul>
          </div>
        </div>
        <p className="tx-close">El abordaje multidisciplinario es clave para preservar la extremidad y mejorar la calidad de vida.</p>
      </div>

      <div className="block reveal" id="preguntas">
        <span className="eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .8-1 1.7M12 17h.01" /></svg>
          Preguntas frecuentes
        </span>
        <h2>Preguntas frecuentes</h2>
        <div className="faq">
          <div className="faq-item"><h3>¿Todas las personas con diabetes desarrollan pie diabético?</h3><p>No. Sin embargo, el riesgo aumenta con el tiempo, especialmente si no se mantiene un buen control de la glucosa y no se realizan revisiones periódicas de los pies.</p></div>
          <div className="faq-item"><h3>¿Se puede evitar una amputación?</h3><p>En muchos casos sí, especialmente si se detecta a tiempo. Una evaluación vascular puede identificar alternativas de tratamiento que permitan preservar la extremidad.</p></div>
          <div className="faq-item"><h3>¿Por qué no cicatrizan las heridas en el pie?</h3><p>Generalmente por una combinación de mala circulación, daño en los nervios e infección. El tratamiento debe abordar todas estas causas.</p></div>
          <div className="faq-item"><h3>¿Qué especialista atiende el pie diabético?</h3><p>El angiologo y cirujano vascular evalúa la circulación y puede realizar procedimientos para mejorar el flujo sanguíneo en las piernas.</p></div>
        </div>
      </div>
    </PadecimientoPage>
  );
}
