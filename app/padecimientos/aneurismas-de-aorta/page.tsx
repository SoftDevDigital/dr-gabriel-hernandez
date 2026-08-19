import { Metadata } from 'next';
import { AneurismasPage } from '@/components/pages/aneurismas-page';

export const metadata: Metadata = {
  title: 'Aneurismas de aorta - Dr. Gabriel Hernández De Rubín',
  description: 'Diagnóstico, vigilancia y tratamiento de aneurismas de aorta mediante estrategias individualizadas. Cirujano Vascular en CDMX.',
};

export default function Page() {
  return <AneurismasPage />;
}
