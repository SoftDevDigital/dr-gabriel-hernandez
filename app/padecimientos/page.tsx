import { Metadata } from 'next';
import { PadecimientosIndexPage } from '@/components/pages/padecimientos-index-page';

export const metadata: Metadata = {
  title: 'Padecimientos Vasculares | Dr. Gabriel Hernández De Rubín',
  description: 'Atención especializada en enfermedades vasculares: várices, trombosis, pie diabético, enfermedad arterial periférica, salvamento de extremidad y aneurismas de aorta.',
};

export default function Page() {
  return <PadecimientosIndexPage />;
}
