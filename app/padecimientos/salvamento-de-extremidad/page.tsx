import { Metadata } from 'next';
import { SalvamentoPage } from '@/components/pages/salvamento-page';

export const metadata: Metadata = {
  title: 'Salvamento de extremidad - Dr. Gabriel Hernández De Rubín',
  description: 'Evaluación especializada de pacientes con riesgo de amputación. Alternativas de tratamiento vascular. Angiólogo en CDMX.',
};

export default function Page() {
  return <SalvamentoPage />;
}
