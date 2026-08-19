import { Metadata } from 'next';
import { ArticuloHerida } from '@/components/pages/articulo-herida';

export const metadata: Metadata = {
  title: '¿Cuándo buscar ayuda por una herida que no cicatriza? | Dr. Gabriel Hernández De Rubín',
  description: 'Las heridas que no cicatrizan pueden indicar problemas de circulación que requieren evaluación vascular.',
};

export default function Page() {
  return <ArticuloHerida />;
}
