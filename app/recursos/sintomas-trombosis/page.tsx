import { Metadata } from 'next';
import { ArticuloTrombosis } from '@/components/pages/articulo-trombosis';

export const metadata: Metadata = {
  title: '¿Qué síntomas pueden indicar una trombosis? | Dr. Gabriel Hernández De Rubín',
  description: 'Identifique las señales de alerta de la trombosis venosa y cuándo buscar ayuda médica.',
};

export default function Page() {
  return <ArticuloTrombosis />;
}
