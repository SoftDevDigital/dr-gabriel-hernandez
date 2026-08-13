'use client';
import { RecursoArticlePage } from '@/components/recurso-article-page';

const article = {
  title: '¿Qué es un aneurisma de aorta y cuándo debo preocuparme?',
  intro: 'Un aneurisma de aorta es una dilatación anormal de la arteria principal del cuerpo. Suele ser silencioso, pero su detección temprana puede salvar vidas.',
  relatedHref: '/padecimientos/aneurismas',
  relatedLabel: 'Leer más sobre aneurismas de aorta',
  sections: [
    { heading: '¿Qué es un aneurisma?', content: '<p>Un aneurisma es una dilatación anormal de una arteria. Cuando ocurre en la aorta — la arteria más grande del cuerpo — se denomina aneurisma de aorta. Puede localizarse en el abdomen (aneurisma de aorta abdominal, el más frecuente) o en el tórax.</p><p style="margin-top:12px">El riesgo principal es la rotura del aneurisma, una emergencia médica con alta mortalidad. Por eso la detección temprana y la vigilancia son fundamentales.</p>' },
    { heading: '¿Quién tiene mayor riesgo?', content: '<ul style="padding-left:20px"><li>Hombres mayores de 65 años</li><li>Fumadores o exfumadores</li><li>Personas con hipertensión arterial</li><li>Antecedentes familiares de aneurisma</li><li>Pacientes con aterosclerosis</li><li>Personas con enfermedades del tejido conectivo</li></ul>' },
    { heading: 'Síntomas y detección', content: '<p>La mayoría de los aneurismas no producen síntomas y se descubren de forma incidental durante estudios de imagen por otras causas. Cuando hay síntomas pueden incluir:</p><ul style="margin-top:12px;padding-left:20px"><li>Sensación de pulsación en el abdomen</li><li>Dolor abdominal o de espalda persistente</li><li>Dolor súbito e intenso (puede indicar rotura inminente)</li></ul><p style="margin-top:12px">Un ultrasonido abdominal simple es suficiente para detectar un aneurisma de aorta abdominal. Es un estudio rápido, indoloro y no invasivo.</p>' },
    { heading: '¿Cuándo se debe tratar?', content: '<p>No todos los aneurismas requieren tratamiento inmediato. La decisión depende de:</p><ul style="margin-top:12px;padding-left:20px"><li><strong>Tamaño:</strong> Aneurismas mayores de 5.5 cm generalmente requieren intervención</li><li><strong>Velocidad de crecimiento:</strong> Más de 0.5 cm en 6 meses es preocupante</li><li><strong>Síntomas:</strong> La presencia de dolor puede indicar riesgo de rotura</li></ul><p style="margin-top:12px">Las opciones de tratamiento incluyen cirugía abierta y procedimientos endovasculares (EVAR), que son mínimamente invasivos y permiten una recuperación más rápida.</p>' },
  ],
};

export function ArticuloAneurisma() { return <RecursoArticlePage article={article} />; }
