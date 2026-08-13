'use client';

import { PadecimientoPage } from '@/components/padecimiento-page';

const tocItems = [
  { id: 'quees', label: '¿Qué es?' },
  { id: 'riesgos', label: 'Factores de riesgo' },
  { id: 'alerta', label: '¿Cuándo consultar?' },
  { id: 'diagnostico', label: 'Diagnóstico' },
  { id: 'tratamiento', label: 'Tratamiento' },
  { id: 'preguntas', label: 'Preguntas' },
];

export function AneurismasPage() {
  return (
    <PadecimientoPage
      title="Aneurismas de aorta"
      empathy="Vigilancia y tratamiento personalizado para proteger su salud."
      intro="Un aneurisma de aorta es una dilatación anormal de la arteria principal del cuerpo. En la mayoría de los casos no produce síntomas, pero puede representar un riesgo importante si no se detecta y vigila adecuadamente. El diagnóstico temprano y el seguimiento especializado son fundamentales."
      tocItems={tocItems}
      ctaTitle="Agende una valoración especializada"
      ctaText="Si tiene factores de riesgo o le han detectado un aneurisma de aorta, una evaluación especializada permite definir el mejor plan de vigilancia o tratamiento."
    >
      <div className="block reveal" id="quees">
        <span className="eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></svg>
          Información
        </span>
        <h2>¿Qué es un aneurisma de aorta?</h2>
        <p>La aorta es la arteria más grande del cuerpo. Un aneurisma ocurre cuando una sección de la aorta se dilata de manera anormal, debilitando su pared. Si no se detecta, puede crecer progresivamente y, en casos extremos, romperse, lo cual es una emergencia médica.</p>
        <p>Los aneurismas pueden localizarse en el abdomen (aorta abdominal) o en el tórax (aorta torácica), y su manejo depende del tamaño, la velocidad de crecimiento y la condición del paciente.</p>
      </div>

      <div className="block reveal" id="riesgos">
        <span className="eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3 4 7v6c0 5 3.5 7.5 8 8 4.5-.5 8-3 8-8V7Z" /><path d="m9 12 2 2 4-4" /></svg>
          Factores de riesgo
        </span>
        <h2>Factores de riesgo</h2>
        <div className="sym-grid">
          {[
            { label: 'Tabaquismo', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 3v10M12 21a4 4 0 0 0 4-4H8a4 4 0 0 0 4 4Z" /></svg> },
            { label: 'Hipertensión arterial', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z" /><path d="M12 8v4" /></svg> },
            { label: 'Antecedentes familiares', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0" /></svg> },
            { label: 'Edad mayor de 60 años', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg> },
            { label: 'Aterosclerosis', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M4 14c2-3 5-3 8 0s6 3 8 0" /><path d="M4 9c2-3 5-3 8 0s6 3 8 0" /></svg> },
            { label: 'Síndromes genéticos', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M9 3c0 4-3 5-3 9s3 5 3 9M15 3c0 4 3 5 3 9s-3 5-3 9" /></svg> },
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
          <p>Consulte a un especialista si:</p>
          <ul className="alert-list">
            {['Le han detectado un aneurisma en algún estudio', 'Tiene antecedentes familiares de aneurisma', 'Siente una pulsación anormal en el abdomen', 'Dolor súbito en abdomen, espalda o pecho', 'Es hombre mayor de 65 años con historial de tabaquismo', 'Tiene múltiples factores de riesgo cardiovascular']?.map?.((item: string, i: number) => (
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
          <div className="step"><span className="n">1</span><p>Ultrasonido abdominal: estudio sencillo, rápido y no invasivo. Es el método de detección inicial más utilizado.</p></div>
          <div className="step"><span className="n">2</span><p>Angiotomografía (angio-TAC): permite medir con precisión el tamaño, la forma y la extensión del aneurisma.</p></div>
          <div className="step"><span className="n">3</span><p>Seguimiento periódico: los aneurismas pequeños requieren vigilancia regular para detectar cambios en su tamaño.</p></div>
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
          No todos los aneurismas requieren cirugía. Muchos se manejan con vigilancia.
        </div>
        <div className="tx-groups">
          <div className="tx-card">
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z" /></svg></span>
            <h3>Vigilancia activa</h3>
            <ul><li>Control de presión arterial</li><li>Estudios de imagen periódicos</li><li>Manejo de factores de riesgo</li></ul>
          </div>
          <div className="tx-card">
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14 4 4 14v6h6L20 10Z" /><path d="m13 5 6 6" /></svg></span>
            <h3>Reparación endovascular (EVAR)</h3>
            <ul><li>Procedimiento mínimamente invasivo</li><li>Colocación de endoprótesis</li><li>Recuperación más rápida</li></ul>
          </div>
          <div className="tx-card">
            <span className="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 3v6l-4 8a3 3 0 0 0 3 4h8a3 3 0 0 0 3-4l-4-8V3" /><path d="M8 3h8" /></svg></span>
            <h3>Cirugía abierta</h3>
            <ul><li>Reemplazo del segmento dañado</li><li>En casos seleccionados</li><li>Tratamiento definitivo</li></ul>
          </div>
        </div>
        <p className="tx-close">La decisión de tratar depende del tamaño del aneurisma, su velocidad de crecimiento y las condiciones del paciente.</p>
      </div>

      <div className="block reveal" id="preguntas">
        <span className="eyebrow">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><circle cx="12" cy="12" r="9" /><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .8-1 1.7M12 17h.01" /></svg>
          Preguntas frecuentes
        </span>
        <h2>Preguntas frecuentes</h2>
        <div className="faq">
          <div className="faq-item"><h3>¿Un aneurisma siempre produce síntomas?</h3><p>No. La mayoría de los aneurismas son asintomáticos y se detectan de manera incidental durante estudios realizados por otra razón. Por eso el tamizaje es importante en poblaciones de riesgo.</p></div>
          <div className="faq-item"><h3>¿Todos los aneurismas necesitan cirugía?</h3><p>No. Los aneurismas pequeños generalmente se vigilan con estudios periódicos. La cirugía se considera cuando alcanzan un tamaño que aumenta el riesgo de ruptura.</p></div>
          <div className="faq-item"><h3>¿Qué pasa si un aneurisma se rompe?</h3><p>La ruptura de un aneurisma de aorta es una emergencia médica con alto riesgo de mortalidad. Por eso la detección y el tratamiento oportuno son fundamentales.</p></div>
          <div className="faq-item"><h3>¿Qué especialista trata los aneurismas de aorta?</h3><p>El cirujano vascular y endovascular es el especialista encargado del diagnóstico, vigilancia y tratamiento de los aneurismas aórticos.</p></div>
        </div>
      </div>
    </PadecimientoPage>
  );
}
