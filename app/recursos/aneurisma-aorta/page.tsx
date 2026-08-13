import { Metadata } from 'next';
import { ArticuloAneurisma } from '@/components/pages/articulo-aneurisma';

export const metadata: Metadata = {
  title: '¿Qué es un aneurisma de aorta y cuándo debo preocuparme? | Dr. Gabriel Hernández De Rubín',
  description: 'Información sobre aneurismas de aorta, factores de riesgo y cuándo consultar al especialista.',
};

export default function Page() {
  return <ArticuloAneurisma />;
}
