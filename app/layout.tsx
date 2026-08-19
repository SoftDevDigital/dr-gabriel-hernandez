import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Dr. Gabriel Hernández De Rubín · Angiología y Cirugía Vascular',
  description: 'Angiología, Cirugía Vascular y Endovascular en Ciudad de México. Diagnóstico y tratamiento de várices, trombosis, pie diabético, mala circulación y aneurismas de aorta. Hospital Médica Sur.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Dr. Gabriel Hernández De Rubín · Angiología y Cirugía Vascular',
    description: 'Angiología, Cirugía Vascular y Endovascular en Ciudad de México.',
    images: [{ url: '/og-image.png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Mulish:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js" defer></script>
      </head>
      <body suppressHydrationWarning>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
