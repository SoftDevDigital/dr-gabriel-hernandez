import { Metadata } from 'next';
import { ArticuloAmputacion } from '@/components/pages/articulo-amputacion';

export const metadata: Metadata = {
  title: '¿Cómo prevenir una amputación en pacientes con diabetes? | Dr. Gabriel Hernández De Rubín',
  description: 'Conozca las alternativas de tratamiento para pacientes diabéticos con riesgo de pérdida de extremidad.',
};

export default function Page() {
  return <ArticuloAmputacion />;
}
