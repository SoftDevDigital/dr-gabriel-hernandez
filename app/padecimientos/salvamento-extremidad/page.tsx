import { Metadata } from 'next';
import { SalvamentoPage } from '@/components/pages/salvamento-page';

export const metadata: Metadata = {
  title: 'Salvamento de Extremidad | Dr. Gabriel Hernández De Rubín',
  description: 'Evaluación especializada de pacientes con riesgo de amputación. Alternativas de tratamiento para preservar extremidades.',
};

export default function Page() {
  return <SalvamentoPage />;
}
