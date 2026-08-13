'use client';

export function Footer() {
  const doctoraliaUrl =
    'https://www.doctoralia.com.mx/perfil/gabriel-hernandez-de-rubin';

  return (
    <footer>
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <b>Dr. Gabriel Hernández De Rubín</b>
          <small>Angiólogo y Cirujano Vascular</small>
          <div className="ced">
            <span>Médico Cirujano U.N.A.M. · Cédula profesional: 5677044</span>
            <span>Cirugía General U.N.A.M. · Cédula de especialista: 8226816</span>
            <span>Angiología y Cirugía Vascular U.N.A.M. · Cédula de especialista: 09146060</span>
          </div>
        </div>

        <div className="foot-col">
          <h4>Especialidades</h4>
          <a href="/padecimientos/varices">Várices</a>
          <a href="/padecimientos/pie-diabetico">Pie diabético</a>
          <a href="/padecimientos/pie-diabetico">Heridas que no cicatrizan</a>
          <a href="/padecimientos/enfermedad-arterial-periferica">Enfermedad arterial periférica</a>
          <a href="/padecimientos/trombosis">Trombosis venosa</a>
          <a href="/padecimientos/aneurismas">Aneurismas de aorta</a>
        </div>

        <div className="foot-col">
          <h4>Información</h4>
          <a href="/sobre-el-dr">Sobre el doctor</a>
          <a href={doctoraliaUrl} target="_blank" rel="noopener noreferrer">
            Opiniones en Doctoralia
          </a>
          <a href="/recursos">Recursos para pacientes</a>
        </div>

        <div className="foot-col">
          <h4>Contacto</h4>
          <p>Centro de Enfermedades Circulatorias Hospital Ángeles Universidad</p>
          <p>Av. Universidad 1080, Módulo 4010, Xoco, Benito Juárez, 03330 Ciudad de México</p>
          <a href="tel:+525556883787">Citas: 55 5688 3787</a>
          <a href="mailto:gulidez@yahoo.com.mx">gulidez@yahoo.com.mx</a>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5215578403359'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <div className="wrap foot-bottom">
        <a href={doctoraliaUrl} target="_blank" rel="noopener noreferrer">
          ★ Opiniones verificadas en Doctoralia
        </a>
        <span>© 2026 Dr. Gabriel Hernández De Rubín. Todos los derechos reservados.</span>
      </div>
    </footer>
  );
}
