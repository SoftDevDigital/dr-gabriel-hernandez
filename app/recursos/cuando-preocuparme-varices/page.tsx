import { Metadata } from 'next';
import { ArticuloVarices } from '@/components/pages/articulo-varices';

export const metadata: Metadata = {
  title: '¿Cuándo debo preocuparme por mis várices? | Dr. Gabriel Hernández De Rubín',
  description: 'Conozca los síntomas que indican que sus várices necesitan atención médica especializada.',
};

export default function Page() {
  return <ArticuloVarices />;
}
