'use client';
import { RecursoArticlePage } from '@/components/recurso-article-page';

const article = {
  title: '¿Cuándo buscar ayuda por una herida que no cicatriza?',
  intro: 'Una herida que no cicatriza después de varias semanas puede indicar un problema de circulación subyacente. La evaluación oportuna es clave para evitar complicaciones.',
  relatedHref: '/padecimientos/pie-diabetico',
  relatedLabel: 'Leer más sobre pie diabético',
  sections: [
    { heading: '¿Por qué una herida no cicatriza?', content: '<p>Las heridas crónicas — aquellas que no mejoran después de 2 a 4 semanas — suelen tener una causa subyacente que impide la cicatrización. Las más frecuentes son problemas de circulación arterial o venosa, diabetes descontrolada o una combinación de factores.</p>' },
    { heading: 'Señales de alerta', content: '<p>Busque atención especializada si:</p><ul style="margin-top:12px;padding-left:20px"><li>Una herida en pierna o pie lleva más de 2 semanas sin mejorar</li><li>La herida aumenta de tamaño o profundidad</li><li>Hay mal olor, secreción purulenta o enrojecimiento alrededor</li><li>La piel alrededor está oscura, brillante o endurecida</li><li>Siente dolor que no cede con analgésicos comunes</li><li>Tiene diabetes y aparece cualquier herida en los pies</li></ul>' },
    { heading: 'La importancia de la evaluación vascular', content: '<p>Muchas heridas crónicas tienen un componente vascular. Una evaluación con ultrasonido Doppler puede determinar si hay insuficiencia arterial o venosa que impide la cicatrización. Tratar la causa vascular subyacente es fundamental para lograr que la herida cierre.</p>' },
    { heading: 'Opciones de tratamiento', content: '<p>El enfoque de tratamiento incluye:</p><ul style="margin-top:12px;padding-left:20px"><li>Evaluación vascular completa</li><li>Revascularización cuando hay obstrucción arterial</li><li>Curación avanzada de heridas</li><li>Control de factores de riesgo (diabetes, infección)</li><li>Terapia compresiva en heridas venosas</li></ul>' },
  ],
};

export function ArticuloHerida() { return <RecursoArticlePage article={article} />; }
