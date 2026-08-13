import { Metadata } from 'next';
import { ArticuloCirculacion } from '@/components/pages/articulo-circulacion';

export const metadata: Metadata = {
  title: '¿Qué significa tener mala circulación en las piernas? | Dr. Gabriel Hernández De Rubín',
  description: 'Entienda las causas, síntomas y opciones de tratamiento para la mala circulación en las piernas.',
};

export default function Page() {
  return <ArticuloCirculacion />;
}
