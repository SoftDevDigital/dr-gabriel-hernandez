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

export function EnfermedadArterialPage() {
  return (
    <PadecimientoPage
      title="Enfermedad arterial periférica y mala circulación"
      empathy="Recupere la movilidad y la calidad de vida de sus piernas."
      intro="La enfermedad arterial periférica (EAP) ocurre cuando las arterias que llevan sangre a las piernas se estrechan u obstruyen, reduciendo el flujo sanguíneo. Esto puede causar dolor al caminar, pies fríos y, en casos avanzados, heridas que no cicatrizan o riesgo de amputación."
      tocItems={tocItems}
      ctaTitle="Agende una valoración especializada"
      ctaText="Si presenta dolor al caminar, pies fríos o cambios de coloración en las piernas, una evaluación vascular puede ayudar a identificar la causa y las alternativas de tratamiento."
    >
      <div className="block reveal" id="quees">
        <span className="eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></svg>
          Información
        </span>
        <h2>¿Qué es la enfermedad arterial periférica?</h2>
        <p>La enfermedad arterial periférica se produce por la acumulación de grasa y calcio en las paredes de las arterias (aterosclerosis), lo que reduce progresivamente el flujo de sangre hacia las piernas. Es más común en personas con diabetes, hipertensión, tabaquismo o colesterol elevado.</p>
        <div className="sym-grid" id="sintomas">
          {[
            { label: 'Dolor al caminar (claudicación)', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z" /><path d="M12 8v4" /></svg> },
            { label: 'Pies fríos', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3v10M12 21a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4Z" /></svg> },
            { label: 'Calambres en las piernas', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m6 4 3 6-4 3 5 7" /><path d="m18 4-3 6 4 3-5 7" /></svg> },
            { label: 'Cambios de coloración', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 0 0 18" /></svg> },
            { label: 'Heridas que no cicatrizan', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10Z" /><circle cx="12" cy="10" r="2.2" /></svg> },
            { label: 'Debilidad en las piernas', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg> },
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
          <p>Es importante una evaluación vascular si presenta:</p>
          <ul className="alert-list">
            {['Dolor en las piernas al caminar que mejora al descansar', 'Dolor en reposo en el pie o los dedos', 'Pies fríos o pálidos', 'Heridas en piernas o pies que no cicatrizan', 'Caída del vello en las piernas', 'Cambio de coloración en los dedos', 'Debilidad o cansancio al caminar distancias cortas']?.map?.((item: string, i: number) => (
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
        <h2>¿Cómo se diagnostica?</h2>
        <div className="steps">
          <div className="step"><span className="n">1</span><p>Evaluación clínica completa que incluye revisión de pulsos y examen físico.</p></div>
          <div className="step"><span className="n">2</span><p>Índice tobillo-brazo (ITB), una prueba sencilla y no invasiva para medir la circulación.</p></div>
          <div className="step"><span className="n">3</span><p>Ultrasonido Doppler vascular arterial para evaluar el grado de obstrucción.</p></div>
          <div className="step"><span className="n">4</span><p>Angiotomografía o angiografía cuando se planifica un procedimiento.</p></div>
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
          El tratamiento depende de la severidad de la enfermedad.
        </div>
        <div className="tx-groups">
          <div className="tx-card">
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z" /></svg></span>
            <h3>Tratamiento médico</h3>
            <ul><li>Control de factores de riesgo</li><li>Programa de ejercicio supervisado</li><li>Medicamentos específicos</li></ul>
          </div>
          <div className="tx-card">
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14 4 4 14v6h6L20 10Z" /><path d="m13 5 6 6" /></svg></span>
            <h3>Procedimientos endovasculares</h3>
            <ul><li>Angioplastia con balón</li><li>Colocación de stent</li><li>Aterectonomía</li></ul>
          </div>
          <div className="tx-card">
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 3v6l-4 8a3 3 0 0 0 3 4h8a3 3 0 0 0 3-4l-4-8V3" /><path d="M8 3h8" /></svg></span>
            <h3>Cirugía vascular</h3>
            <ul><li>Bypass vascular</li><li>Endarterectomía</li><li>Procedimientos híbridos</li></ul>
          </div>
        </div>
        <p className="tx-close">El objetivo es mejorar la circulación, aliviar los síntomas y prevenir complicaciones mayores.</p>
      </div>

      <div className="block reveal" id="preguntas">
        <span className="eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .8-1 1.7M12 17h.01" /></svg>
          Preguntas frecuentes
        </span>
        <h2>Preguntas frecuentes</h2>
        <div className="faq">
          <div className="faq-item"><h3>¿Qué es la claudicación intermitente?</h3><p>Es el dolor o calambre en las piernas que aparece al caminar y mejora al detenerse. Es el síntoma más común de la enfermedad arterial periférica.</p></div>
          <div className="faq-item"><h3>¿La enfermedad arterial periférica es grave?</h3><p>Puede serlo. Además de afectar la movilidad, está asociada a mayor riesgo cardiovascular. Una detección temprana permite un mejor manejo.</p></div>
          <div className="faq-item"><h3>¿Se puede mejorar la circulación?</h3><p>Sí. Con el tratamiento adecuado, que puede incluir cambios en el estilo de vida, medicamentos o procedimientos vasculares, es posible mejorar significativamente la circulación.</p></div>
          <div className="faq-item"><h3>¿Quién debe evaluarse?</h3><p>Personas mayores de 50 años, fumadores, diabéticos, hipertensos o con colesterol alto que presenten síntomas en las piernas.</p></div>
        </div>
      </div>
    </PadecimientoPage>
  );
}
