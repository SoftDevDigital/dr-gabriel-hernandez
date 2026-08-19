import { Metadata } from 'next';
import { ContactoFullPage } from '@/components/pages/contacto-full-page';

export const metadata: Metadata = {
  title: 'Contacto y ubicaciones - Dr. Gabriel Hernández De Rubín',
  description: 'Agende su cita con el Dr. Gabriel Hernández De Rubín. Consultas en Hospital Médica Sur y Hospital Ángeles Universidad, CDMX.',
};

export default function Page() {
  return <ContactoFullPage />;
}
