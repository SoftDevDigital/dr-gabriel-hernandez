'use client';

const QUIROFANO_IMG = '/images/quirofano.png';

const items = [
  'Aneurismas de aorta',
  'Enfermedad arterial periférica avanzada',
  'Riesgo de pérdida de extremidad',
  'Pie diabético complicado',
  'Heridas complejas',
  'Procedimientos endovasculares especializados',
  'Creación y salvamento de accesos vasculares para hemodiálisis',
];

export function ExperienciaCompleja() {
  return (
    <section data-band="" className="band-dark" id="complejas">
      <div className="wrap complex-in">
        <div className="complex-photo reveal">
          <img src={QUIROFANO_IMG} alt="Procedimiento endovascular mínimamente invasivo en quirófano" />
        </div>
        <div className="reveal d1">
          <span className="eyebrow mint"><span className="rule"></span>Enfermedades vasculares complejas</span>
          <h2 style={{ color: '#fff', fontSize: 'clamp(1.9rem,3.6vw,2.6rem)', margin: '.3em 0 0' }}>Experiencia en casos de alta complejidad</h2>
          <ul className="complex-list">
            {items?.map?.((item: string, i: number) => (
              <li key={i}><span className="tk">✓</span>{item}</li>
            ))}
          </ul>
          <div className="complex-mobile-btns">
            <a className="btn btn-primary btn-lg" href="/segunda-opinion">Solicitar valoración →</a>
            <a className="btn btn-ghost btn-lg" href="/padecimientos">Ver padecimientos</a>
          </div>
        </div>
      </div>
    </section>
  );
}
