'use client';

import { getWhatsAppUrl } from '@/lib/whatsapp';

const sedes = [
  {
    nombre: 'Clínica Vascular Hospital Médica Sur',
    direccion:
      'Puente de Piedra 150, Torre II Planta Baja, Toriello Guerra, Tlalpan, 14050 Ciudad de México',
    telefono: '55 5424 6845',
    telefonoHref: 'tel:+525554246845',
    mapa: 'https://maps.app.goo.gl/jp4CcUCM7dDvXV7P6',
  },
  {
    nombre: 'Centro de Enfermedades Circulatorias Hospital Ángeles Universidad',
    direccion:
      'Av. Universidad 1080, Módulo 4010, Xoco, Benito Juárez, 03330 Ciudad de México',
    telefono: '55 5688 3787',
    telefonoHref: 'tel:+525556883787',
    mapa: 'https://maps.app.goo.gl/H9fU4GSWkv9Bvsdz7',
  },
];

const whatsappMessage =
  'Hola, me gustaría agendar una consulta con el Dr. Gabriel.';

export function UbicacionesSection() {
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);
  return (
    <section data-band="" className="band-cream" id="ubicaciones">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow">
            <span className="rule" />
            Atención médica
          </span>

          <h2>Dónde puede ser atendido</h2>

          <p>
            Consultas y atención especializada en Hospital Médica Sur y
            Hospital Ángeles Universidad, con infraestructura hospitalaria y
            recursos diagnósticos para la evaluación y el tratamiento de
            enfermedades vasculares.
          </p>
        </div>

        <div className="sedes">
          {sedes.map((sede, index) => (
            <article
              className={`sede reveal${index === 1 ? ' d1' : ''}`}
              key={sede.nombre}
            >
              <a
                className="map sede-map-link"
                href={sede.mapa}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir la ubicación de ${sede.nombre} en Google Maps`}
              >
                <span className="map-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 21s-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11Z" />
                    <circle cx="12" cy="10" r="2.4" />
                  </svg>
                </span>

                <span className="map-label">Ver ubicación en Google Maps</span>
                <span className="map-arrow" aria-hidden="true">↗</span>
              </a>

              <div className="body">
                <h3>{sede.nombre}</h3>

                <div className="row">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M12 21s-7-5-7-11a7 7 0 0 1 14 0c0 6-7 11-7 11Z" />
                    <circle cx="12" cy="10" r="2.4" />
                  </svg>
                  <span>{sede.direccion}</span>
                </div>

                <div className="row">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z" />
                  </svg>

                  <span>
                    Citas:{' '}
                    <a className="sede-phone" href={sede.telefonoHref}>
                      {sede.telefono}
                    </a>
                  </span>
                </div>

                <a
                  className="sede-whatsapp-btn"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Agendar por WhatsApp en ${sede.nombre}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2Zm5.5 14.2c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.3-.9-2.8-1.2-4.5-4.1-4.6-4.3-.1-.2-1-1.4-1-2.6s.6-1.8.9-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.4-.1.7.5.8 1 1.3 1.7 1.8.4.3.7.4.9.2l.6-.7c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.4.1.2.1.8-.1 1.5Z" />
                  </svg>
                  Agendar por WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
