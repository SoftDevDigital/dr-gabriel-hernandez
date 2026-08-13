'use client';

import { useEffect, useState } from 'react';

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 420);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a className={`wa-float ${show ? 'show' : ''}`} href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ''}`} target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp">
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2Zm5.5 14.2c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.3-.9-2.8-1.2-4.5-4.1-4.6-4.3-.1-.2-1-1.4-1-2.6s.6-1.8.9-2.1c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.4-.1.7.5.8 1 1.3 1.7 1.8.4.3.7.4.9.2l.6-.7c.2-.2.4-.2.6-.1l1.9.9c.2.1.4.2.4.4.1.2.1.8-.1 1.5Z" />
      </svg>
    </a>
  );
}
