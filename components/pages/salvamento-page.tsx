'use client';

import { PadecimientoPage } from '@/components/padecimiento-page';

const tocItems = [
  { id: 'quees', label: '¿Qué es?' },
  { id: 'situaciones', label: 'Situaciones' },
  { id: 'alerta', label: '¿Cuándo consultar?' },
  { id: 'evaluacion', label: 'Evaluación' },
  { id: 'tratamiento', label: 'Tratamiento' },
  { id: 'preguntas', label: 'Preguntas' },
];

export function SalvamentoPage() {
  return (
    <PadecimientoPage
      title="Salvamento de extremidad"
      empathy="Cada extremidad merece una segunda oportunidad."
      intro="El salvamento de extremidad es un enfoque especializado que busca preservar piernas y pies en pacientes con enfermedades vasculares avanzadas, heridas complejas o riesgo de amputación. Una evaluación vascular oportuna puede identificar alternativas de tratamiento que permitan evitar o limitar una amputación."
      tocItems={tocItems}
      ctaTitle="Solicite una segunda opinión"
      ctaText="Si le han propuesto una amputación, una segunda opinión especializada puede identificar alternativas de tratamiento que permitan preservar su extremidad."
    >
      <div className="block reveal" id="quees">
        <span className="eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></svg>
          Información
        </span>
        <h2>¿Qué es el salvamento de extremidad?</h2>
        <p>El salvamento de extremidad agrupa las estrategias médicas y quirúrgicas orientadas a preservar una pierna o pie cuando existe riesgo de amputación. Esto puede deberse a enfermedad arterial avanzada, pie diabético complicado, heridas crónicas o infecciones severas.</p>
        <p>El objetivo es restablecer el flujo sanguíneo, controlar la infección y permitir la cicatrización, preservando la mayor funcionalidad posible.</p>
      </div>

      <div className="block reveal" id="situaciones">
        <span className="eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3v18M5 10l7-7 7 7" /><path d="M5 20h14" /></svg>
          Situaciones frecuentes
        </span>
        <h2>¿En qué situaciones se considera?</h2>
        <div className="sym-grid">
          {[
            { label: 'Enfermedad arterial avanzada', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 14c2-3 5-3 8 0s6 3 8 0" /><path d="M4 9c2-3 5-3 8 0s6 3 8 0" /></svg> },
            { label: 'Pie diabético complicado', icon: <img src="/images/pie-diabetico.svg" alt="" aria-hidden="true" /> },
            { label: 'Heridas crónicas con exposición ósea', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z" /><path d="M12 8v4" /></svg> },
            { label: 'Gangrena localizada', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 0 0 18" /></svg> },
            { label: 'Infección severa del pie', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="m6 4 3 6-4 3 5 7" /><path d="m18 4-3 6 4 3-5 7" /></svg> },
            { label: 'Propuesta previa de amputación', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3 2 20h20L12 3Z" /><path d="M12 10v4M12 17h.01" /></svg> },
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
          <h2>¿Cuándo solicitar una segunda opinión?</h2>
          <p>Considere una segunda opinión especializada si:</p>
          <ul className="alert-list">
            {['Le han propuesto una amputación mayor (por arriba del tobillo)', 'No le han realizado estudios vasculares previos', 'Tiene heridas que no mejoran a pesar del tratamiento', 'Presenta dolor en reposo en el pie', 'Tiene cambios de coloración (negro, azulado) en dedos o pie', 'Le han dicho que "no se puede hacer nada más"']?.map?.((item: string, i: number) => (
              <li key={i}>
                <svg className="warn" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9" /><path d="M12 8v4M12 16h.01" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="block reveal" id="evaluacion">
        <span className="eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
          Evaluación
        </span>
        <h2>¿Cómo se evalúa al paciente?</h2>
        <div className="steps">
          <div className="step"><span className="n">1</span><p>Evaluación clínica integral de la extremidad y el estado general del paciente.</p></div>
          <div className="step"><span className="n">2</span><p>Estudios vasculares no invasivos (ultrasonido Doppler, índice tobillo-brazo).</p></div>
          <div className="step"><span className="n">3</span><p>Estudios de imagen avanzados (angiotomografía, angiografía) para planificar la revascularización.</p></div>
          <div className="step"><span className="n">4</span><p>Evaluación del potencial de cicatrización y funcionalidad de la extremidad.</p></div>
        </div>
      </div>

      <div className="block reveal" id="tratamiento">
        <span className="eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3v18M3 12h18" /><circle cx="12" cy="12" r="9" /></svg>
          Tratamiento
        </span>
        <h2>Estrategias de salvamento</h2>
        <div className="tx-note">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20 6 9 17l-5-5" /></svg>
          Una evaluación vascular puede cambiar el panorama del paciente.
        </div>
        <div className="tx-groups">
          <div className="tx-card">
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14 4 4 14v6h6L20 10Z" /><path d="m13 5 6 6" /></svg></span>
            <h3>Revascularización endovascular</h3>
            <ul><li>Angioplastia con balón</li><li>Stent</li><li>Recanalizar arterias bloqueadas</li></ul>
          </div>
          <div className="tx-card">
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 3v6l-4 8a3 3 0 0 0 3 4h8a3 3 0 0 0 3-4l-4-8V3" /><path d="M8 3h8" /></svg></span>
            <h3>Cirugía vascular abierta</h3>
            <ul><li>Bypass vascular</li><li>Endarterectomía</li><li>Procedimientos híbridos</li></ul>
          </div>
          <div className="tx-card">
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z" /></svg></span>
            <h3>Manejo integral de heridas</h3>
            <ul><li>Desbridamiento quirúrgico</li><li>Terapias avanzadas</li><li>Equipo multidisciplinario</li></ul>
          </div>
        </div>
        <p className="tx-close">Cada caso es diferente. El plan de tratamiento se define de manera individualizada.</p>
      </div>

      <div className="block reveal" id="preguntas">
        <span className="eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .8-1 1.7M12 17h.01" /></svg>
          Preguntas frecuentes
        </span>
        <h2>Preguntas frecuentes</h2>
        <div className="faq">
          <div className="faq-item"><h3>¿Siempre es posible evitar una amputación?</h3><p>No en todos los casos, pero una evaluación vascular completa puede identificar alternativas que no se habían considerado. Muchos pacientes pueden beneficiarse de procedimientos de revascularización.</p></div>
          <div className="faq-item"><h3>¿Por qué es importante una segunda opinión?</h3><p>Porque los avances en cirugía vascular y endovascular ofrecen nuevas alternativas que pueden no estar disponibles en todos los centros médicos.</p></div>
          <div className="faq-item"><h3>¿Cuánto tiempo tengo para buscar una segunda opinión?</h3><p>Depende de la urgencia del caso. En situaciones de infección activa o dolor severo, es importante actuar con prontitud. Consulte con su médico tratante.</p></div>
        </div>
      </div>
    </PadecimientoPage>
  );
}
