import { Metadata } from 'next';
import { SegundaOpinionPage } from '@/components/pages/segunda-opinion-page';

export const metadata: Metadata = {
  title: 'Segunda Opinión Vascular | Dr. Gabriel Hernández De Rubín',
  description: 'Si le han propuesto una amputación o le han diagnosticado una enfermedad vascular compleja, una segunda opinión especializada puede ofrecer alternativas.',
};

export default function Page() {
  return <SegundaOpinionPage />;
}
