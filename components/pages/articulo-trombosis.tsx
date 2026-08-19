'use client';
import { RecursoArticlePage } from '@/components/recurso-article-page';

const article = {
  title: '¿Qué síntomas pueden indicar una trombosis?',
  intro: 'La trombosis venosa profunda es una condición seria que requiere diagnóstico y tratamiento oportuno. Conocer sus síntomas puede marcar la diferencia.',
  relatedHref: '/padecimientos/trombosis',
  relatedLabel: 'Leer más sobre trombosis',
  sections: [
    { heading: '¿Qué es la trombosis venosa?', content: '<p>La trombosis venosa profunda (TVP) ocurre cuando se forma un coágulo de sangre en una vena profunda del cuerpo, generalmente en las piernas. Es una condición potencialmente grave porque el coágulo puede desprenderse y viajar a los pulmones (embolia pulmonar).</p>' },
    { heading: 'Síntomas principales', content: '<p>Los síntomas más frecuentes incluyen:</p><ul style="margin-top:12px;padding-left:20px"><li>Hinchazón en una pierna (generalmente unilateral)</li><li>Dolor o sensibilidad en la pantorrilla o el muslo</li><li>Enrojecimiento o cambio de color en la piel</li><li>Sensación de calor en la zona afectada</li><li>Venas superficiales más visibles</li></ul><p style="margin-top:12px">Es importante notar que la trombosis puede ocurrir sin síntomas evidentes.</p>' },
    { heading: '¿Cuándo buscar atención urgente?', content: '<p>Busque atención médica inmediata si presenta:</p><ul style="margin-top:12px;padding-left:20px"><li>Dificultad para respirar súbita</li><li>Dolor en el pecho que empeora al respirar</li><li>Tos con sangre</li><li>Ritmo cardíaco acelerado</li><li>Mareo o desmayo</li></ul><p style="margin-top:12px">Estos síntomas pueden indicar una embolia pulmonar, complicación grave de la trombosis.</p>' },
    { heading: 'Factores de riesgo', content: '<p>Algunos factores que aumentan el riesgo de trombosis:</p><ul style="margin-top:12px;padding-left:20px"><li>Inmovilización prolongada (viajes largos, hospitalización)</li><li>Cirugía reciente</li><li>Uso de anticonceptivos hormonales</li><li>Embarazo</li><li>Antecedentes familiares de trombosis</li><li>Obesidad</li><li>Tabaquismo</li></ul>' },
  ],
};

export function ArticuloTrombosis() { return <RecursoArticlePage article={article} />; }
