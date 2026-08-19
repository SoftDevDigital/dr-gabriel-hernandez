'use client';

export function DoctoraliaSplit() {
  const doctoraliaUrl =
    'https://www.doctoralia.com.mx/perfil/gabriel-hernandez-de-rubin';

  return (
    <section data-band="" className="band-cream" id="doctoralia">
      <div className="wrap split">
        <div className="ph doctoralia-photo reveal">
          <img
            src="/images/doctoralia-consulta.jpeg"
            alt="Procedimiento médico vascular en quirófano"
            loading="lazy"
          />
        </div>

        <div className="reveal d1">
          <span className="eyebrow">
            <span className="rule" />
            Reconocido por sus pacientes
          </span>

          <h2
            style={{
              fontSize: 'clamp(2rem,4vw,2.8rem)',
              margin: '.3em 0',
            }}
          >
            Opiniones verificadas en Doctoralia
          </h2>

          <p style={{ color: 'var(--text-2)' }}>
            Conozca las opiniones verificadas y experiencias compartidas por
            pacientes atendidos por el Dr. Gabriel Hernández De Rubín.
          </p>

          <a
            href={doctoraliaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="doc-widget"
            aria-label="Abrir el perfil oficial del Dr. Gabriel Hernández De Rubín en Doctoralia"
          >
            <div className="stars" aria-hidden="true">
              ★★★★★
            </div>

            <div className="mono">Perfil oficial en Doctoralia</div>

            <div className="cal">
              Opiniones verificadas de pacientes
            </div>

            <div className="doctoralia-link">
              Ver perfil oficial
              <span aria-hidden="true">↗</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}