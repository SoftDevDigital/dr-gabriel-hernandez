'use client';
import { RecursoArticlePage } from '@/components/recurso-article-page';

const article = {
  title: '¿Cuándo debo preocuparme por mis várices?',
  intro: 'Las várices son una de las enfermedades vasculares más frecuentes. Aunque muchas veces se consideran un problema estético, pueden indicar una enfermedad venosa que requiere atención médica.',
  relatedHref: '/padecimientos/varices',
  relatedLabel: 'Leer más sobre várices',
  sections: [
    { heading: '¿Qué son las várices?', content: '<p>Las várices son venas dilatadas y tortuosas que aparecen principalmente en las piernas. Se forman cuando las válvulas venosas no funcionan correctamente, permitiendo que la sangre se acumule en lugar de fluir hacia el corazón.</p>' },
    { heading: 'Señales de que debe consultar', content: '<p>Consulte a un especialista vascular si presenta:</p><ul style="margin-top:12px;padding-left:20px"><li>Venas visiblemente dilatadas, abultadas o de color azul/morado</li><li>Pesadez, cansancio o dolor en las piernas, especialmente al final del día</li><li>Hinchazón en tobillos o piernas</li><li>Calambres nocturnos frecuentes</li><li>Cambios en la piel: oscurecimiento, resequedad o picazón</li><li>Sensación de ardor o pulsación en las venas</li></ul>' },
    { heading: 'Señales de alarma', content: '<p>Busque atención médica urgente si nota:</p><ul style="margin-top:12px;padding-left:20px"><li>Sangrado de una váriz (incluso leve)</li><li>Una úlcera o herida abierta cerca de la váriz</li><li>Enrojecimiento, calor o dolor intenso en una vena (puede indicar trombosis)</li><li>Endurecimiento de la piel alrededor de las várices</li></ul>' },
    { heading: '¿Qué puede hacer?', content: '<p>Existen tratamientos modernos, mínimamente invasivos, que permiten tratar las várices de forma ambulatoria y con rápida recuperación. Una evaluación con ultrasonido Doppler permite conocer el estado de sus venas y determinar el mejor tratamiento.</p>' },
  ],
};

export function ArticuloVarices() { return <RecursoArticlePage article={article} />; }
