import { Metadata } from 'next';
import { AneurismasPage } from '@/components/pages/aneurismas-page';

export const metadata: Metadata = {
  title: 'Aneurismas de Aorta | Dr. Gabriel Hernández De Rubín',
  description: 'Diagnóstico, vigilancia y tratamiento de aneurismas de aorta mediante estrategias individualizadas.',
};

export default function Page() {
  return <AneurismasPage />;
}
