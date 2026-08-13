'use client';

const articles = [
  { title: '¿Cuándo debo preocuparme por mis várices?', href: '/recursos/cuando-preocuparme-varices' },
  { title: '¿Qué síntomas pueden indicar una trombosis?', href: '/recursos/sintomas-trombosis' },
  { title: '¿Cuándo buscar ayuda por una herida que no cicatriza?', href: '/recursos/herida-no-cicatriza' },
  { title: '¿Cómo prevenir una amputación en pacientes con diabetes?', href: '/recursos/prevenir-amputacion-diabetes' },
  { title: '¿Qué significa tener mala circulación en las piernas?', href: '/recursos/mala-circulacion-piernas' },
  { title: '¿Qué es un aneurisma de aorta y cuándo debo preocuparme?', href: '/recursos/aneurisma-aorta' },
];

const delays = ['', 'd1', 'd2', '', 'd1', 'd2'];

export function RecursosSection() {
  return (
    <section data-band="" className="band-alt" id="recursos">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="eyebrow"><span className="rule"></span>Recursos para pacientes</span>
          <h2>Artículos más consultados</h2>
        </div>
        <div className="articles">
          {articles?.map?.((a: any, i: number) => (
            <a className={`art reveal ${delays?.[i] ?? ''}`} href={a?.href ?? '#'} key={i}>
              <h3>{a?.title ?? ''}</h3>
              <span className="arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
