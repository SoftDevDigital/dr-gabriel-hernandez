import { Metadata } from 'next';
import { PieDiabeticoPage } from '@/components/pages/pie-diabetico-page';

export const metadata: Metadata = {
  title: 'Pie diabético y heridas que no cicatrizan - Dr. Gabriel Hernández De Rubín',
  description: 'Evaluación integral de pacientes con diabetes, heridas complejas y riesgo de amputación. Angiólogo y Cirujano Vascular en CDMX.',
};

export default function Page() {
  return <PieDiabeticoPage />;
}
