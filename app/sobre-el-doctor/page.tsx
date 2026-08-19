import { Metadata } from 'next';
import { SobreElDoctorPage } from '@/components/pages/sobre-el-doctor-page';

export const metadata: Metadata = {
  title: 'Sobre el Dr. Gabriel Hernández De Rubín',
  description: 'Conozca la trayectoria, formación y experiencia del Dr. Gabriel Hernández De Rubín, especialista en Angiología, Cirugía Vascular y Endovascular.',
};

export default function Page() {
  return <SobreElDoctorPage />;
}
