'use client';
import { RecursoArticlePage } from '@/components/recurso-article-page';

const article = {
  title: '¿Cómo prevenir una amputación en pacientes con diabetes?',
  intro: 'La diabetes es la principal causa de amputación no traumática en México. Sin embargo, con detección temprana y tratamiento adecuado, muchas amputaciones pueden prevenirse.',
  relatedHref: '/padecimientos/salvamento-extremidad',
  relatedLabel: 'Leer más sobre salvamento de extremidad',
  sections: [
    { heading: '¿Por qué la diabetes aumenta el riesgo?', content: '<p>La diabetes puede dañar tanto los nervios (neuropatía) como los vasos sanguíneos (vasculopatía) de las piernas y pies. La neuropatía reduce la sensibilidad, lo que permite que heridas pequeñas pasen desapercibidas. La vasculopatía reduce el flujo sanguíneo, dificultando la cicatrización.</p>' },
    { heading: 'Medidas preventivas fundamentales', content: '<ul style="padding-left:20px"><li><strong>Revise sus pies diariamente:</strong> Busque heridas, ampollas, cambios de color o deformidades</li><li><strong>Mantenga su diabetes controlada:</strong> Niveles adecuados de glucosa favorecen la cicatrización</li><li><strong>Use calzado adecuado:</strong> Evite zapatos ajustados o que provoquen roces</li><li><strong>No camine descalzo:</strong> Proteja sus pies de lesiones</li><li><strong>Cuide sus uñas correctamente:</strong> Corte recto y evite cortar demasiado</li><li><strong>Acuda a revisiones vasculares periódicas:</strong> Especialmente si tiene más de 10 años con diabetes</li></ul>' },
    { heading: 'Señales de alarma', content: '<p>Consulte de inmediato si presenta:</p><ul style="margin-top:12px;padding-left:20px"><li>Una herida en el pie que no mejora en 1-2 semanas</li><li>Cambio de color en los dedos (oscurecimiento, palidez)</li><li>Dolor en las piernas al caminar que mejora al detenerse</li><li>Pies permanentemente fríos o sin pulso</li><li>Infección en el pie (enrojecimiento, hinchazón, fiebre)</li></ul>' },
    { heading: 'El salvamento de extremidad', content: '<p>Cuando ya existe una lesión avanzada, el objetivo es salvar la extremidad. Las técnicas modernas de revascularización (angioplastia, stents, bypass) permiten restablecer el flujo sanguíneo y dar oportunidad de cicatrización. Una evaluación vascular oportuna puede identificar estas alternativas antes de que la amputación sea la única opción.</p>' },
  ],
};

export function ArticuloAmputacion() { return <RecursoArticlePage article={article} />; }
