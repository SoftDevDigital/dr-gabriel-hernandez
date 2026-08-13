'use client';

const padecimientos = [
  { title: 'Várices e insuficiencia venosa', desc: 'Diagnóstico y tratamiento de várices, pesadez, inflamación y complicaciones venosas.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 3c0 4-3 5-3 9s3 5 3 9M15 3c0 4 3 5 3 9s-3 5-3 9" /></svg>, href: '/padecimientos/varices' },
  { title: 'Mala circulación y enfermedad arterial periférica', desc: 'Dolor al caminar, pies fríos y problemas de circulación.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 14c2-3 5-3 8 0s6 3 8 0M4 9c2-3 5-3 8 0s6 3 8 0" /></svg>, href: '/padecimientos/enfermedad-arterial-periferica' },
  { title: 'Pie diabético y heridas que no cicatrizan', desc: 'Evaluación integral de pacientes con diabetes, heridas complejas y riesgo de amputación.', icon: <img src="/images/pie-diabetico.svg" alt="" aria-hidden="true" />, href: '/padecimientos/pie-diabetico' },
  { title: 'Trombosis venosa', desc: 'Diagnóstico oportuno y tratamiento especializado de enfermedades trombóticas.', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>, href: '/padecimientos/trombosis' },
  { title: 'Salvamento de extremidad', desc: 'Evaluación especializada de pacientes con riesgo de amputación.', icon: <img src="/images/salvamento-extremidad.svg" alt="" aria-hidden="true" />, href: '/padecimientos/salvamento-extremidad' },
  { title: 'Aneurismas de aorta', desc: 'Diagnóstico, vigilancia y tratamiento mediante estrategias individualizadas.', icon: <img src="/images/logo-aneurisma.svg" alt="" aria-hidden="true" className="aneurisma-icon" />, href: '/padecimientos/aneurismas' },
];

const delays = ['', 'd1', 'd2', '', 'd1', 'd2'];

export function PadecimientosSection() {
  return (
    <section data-band="" className="band-alt" id="padecimientos">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow"><span className="rule"></span>Atención por síntoma</span>
          <h2>¿Busca atención para un problema de circulación?</h2>
          <p>El Dr. Hernández De Rubín brinda atención especializada en enfermedades vasculares frecuentes y complejas.</p>
        </div>
        <div className="cards">
          {padecimientos?.map?.((p: any, i: number) => (
            <a className={`card reveal ${delays?.[i] ?? ''}`} href={p?.href ?? '#'} key={i}>
              <div className="top">
                <span className="ic">{p?.icon}</span>
                <h3>{p?.title ?? ''}</h3>
                <span className="arrow">→</span>
              </div>
              <p>{p?.desc ?? ''}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
