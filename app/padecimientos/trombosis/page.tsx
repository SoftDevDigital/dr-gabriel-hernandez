import { Metadata } from 'next';
import { TrombosisPage } from '@/components/pages/trombosis-page';

export const metadata: Metadata = {
  title: 'Trombosis venosa - Dr. Gabriel Hernández De Rubín',
  description: 'Diagnóstico oportuno y tratamiento especializado de trombosis venosa profunda y superficial. Angiólogo y Cirujano Vascular en CDMX.',
};

export default function Page() {
  return <TrombosisPage />;
}
