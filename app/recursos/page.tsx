import { Metadata } from 'next';
import { RecursosFullPage } from '@/components/pages/recursos-full-page';

export const metadata: Metadata = {
  title: 'Recursos para pacientes - Dr. Gabriel Hernández De Rubín',
  description: 'Artículos, guías y recursos informativos sobre enfermedades vasculares: várices, trombosis, pie diabético, mala circulación y más.',
};

export default function Page() {
  return <RecursosFullPage />;
}
