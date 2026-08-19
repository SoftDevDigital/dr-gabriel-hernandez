'use client';

const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    big: '+10 años',
    sub: 'de experiencia en Angiología, Cirugía Vascular y Endovascular.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 3 4 7v6c0 5 3.5 7.5 8 8 4.5-.5 8-3 8-8V7Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    big: 'Trayectoria reconocida',
    sub: 'conferencias y actividades científicas en congresos nacionales e internacionales.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
      </svg>
    ),
    big: 'Profesor de posgrado',
    sub: 'Conocimiento y experiencia para transmitir a los nuevos especialistas.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M7 20h10" />
        <path d="M9 16h6" />
        <path d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 4.9-4.5-2.3-4.5 2.3.9-4.9-3.6-3.5 5-.7L12 3Z" />
      </svg>
    ),
    big: '5 Estrellas',
    sub: 'Cientos de opiniones verificadas en Doctoralia.',
  },
];

const delays = ['', 'd1', 'd2', 'd3'];

export function TrayectoriaSection() {
  return (
    <section data-band="" className="band-alt trayectoria-section" id="sobre">
      <div className="wrap">
        <div className="sec-head reveal trayectoria-head">
          <span className="eyebrow">
            <span className="rule" />
            La experiencia hace la diferencia
          </span>
          <h2>Experiencia que respalda cada decisión clínica</h2>
          <p>
            Formación, práctica especializada y confianza de pacientes que respaldan
            una atención vascular rigurosa y personalizada.
          </p>
        </div>

        <div className="stats">
          {stats.map((stat, index) => (
            <article className={`stat reveal ${delays[index] ?? ''}`} key={stat.big}>
              <span className="ic" aria-hidden="true">
                {stat.icon}
              </span>
              <div className="big">{stat.big}</div>
              <div className="sub">{stat.sub}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
