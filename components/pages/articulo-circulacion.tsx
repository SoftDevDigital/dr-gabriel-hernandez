'use client';
import { RecursoArticlePage } from '@/components/recurso-article-page';

const article = {
  title: '¿Qué significa tener mala circulación en las piernas?',
  intro: 'La "mala circulación" es un término común que puede referirse a diferentes condiciones vasculares. Entender sus causas y síntomas es el primer paso para un tratamiento efectivo.',
  relatedHref: '/padecimientos/enfermedad-arterial-periferica',
  relatedLabel: 'Leer más sobre enfermedad arterial periférica',
  sections: [
    { heading: '¿Qué causa la mala circulación?', content: '<p>La "mala circulación" puede deberse a problemas en las arterias (llevan sangre del corazón a las piernas) o en las venas (regresan la sangre al corazón). Las causas más frecuentes son:</p><ul style="margin-top:12px;padding-left:20px"><li><strong>Enfermedad arterial periférica:</strong> Placas de grasa (aterosclerosis) que obstruyen las arterias</li><li><strong>Insuficiencia venosa:</strong> Válvulas venosas que no funcionan correctamente</li><li><strong>Vasculitis:</strong> Inflamación de los vasos sanguíneos</li></ul>' },
    { heading: 'Síntomas frecuentes', content: '<ul style="padding-left:20px"><li>Dolor en las piernas al caminar que mejora al detenerse (claudicación)</li><li>Pies fríos o pálidos</li><li>Calambres en las pantorrillas</li><li>Hormigueo o adormecimiento</li><li>Heridas que tardan en cicatrizar</li><li>Pérdida de vello en las piernas</li><li>Uñas engrosadas o de crecimiento lento</li><li>Cambios de color en la piel</li></ul>' },
    { heading: '¿Cuándo consultar al especialista?', content: '<p>Es recomendable buscar evaluación vascular si:</p><ul style="margin-top:12px;padding-left:20px"><li>El dolor al caminar limita sus actividades</li><li>Tiene factores de riesgo: diabetes, hipertensión, tabaquismo, colesterol alto</li><li>Presenta heridas que no cicatrizan en piernas o pies</li><li>Nota cambios de color o temperatura en sus pies</li></ul><p style="margin-top:12px">Un estudio de ultrasonido Doppler no invasivo puede evaluar el flujo sanguíneo y determinar si existe obstrucción arterial o venosa.</p>' },
    { heading: 'Tratamiento', content: '<p>El tratamiento depende de la causa y severidad. Las opciones incluyen:</p><ul style="margin-top:12px;padding-left:20px"><li>Control de factores de riesgo (dejar de fumar, controlar diabetes e hipertensión)</li><li>Ejercicio supervisado</li><li>Medicamentos que mejoran el flujo sanguíneo</li><li>Procedimientos mínimamente invasivos (angioplastia, stents)</li><li>Cirugía de bypass cuando es necesario</li></ul>' },
  ],
};

export function ArticuloCirculacion() { return <RecursoArticlePage article={article} />; }
