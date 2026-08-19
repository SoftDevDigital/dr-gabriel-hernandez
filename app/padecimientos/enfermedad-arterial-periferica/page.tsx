import { Metadata } from 'next';
import { EnfermedadArterialPage } from '@/components/pages/enfermedad-arterial-page';

export const metadata: Metadata = {
  title: 'Enfermedad arterial periférica - Dr. Gabriel Hernández De Rubín',
  description: 'Dolor al caminar, pies fríos, mala circulación. Diagnóstico y tratamiento de enfermedad arterial periférica. Angiólogo en CDMX.',
};

export default function Page() {
  return <EnfermedadArterialPage />;
}
