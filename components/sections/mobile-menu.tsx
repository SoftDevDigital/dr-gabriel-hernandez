'use client';

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const links = [
    { label: 'Inicio', href: '/' },
    { label: 'Sobre el Dr.', href: '/sobre-el-dr' },
    { label: 'Várices', href: '/padecimientos/varices' },
    { label: 'Pie diabético', href: '/padecimientos/pie-diabetico' },
    { label: 'Trombosis venosa', href: '/padecimientos/trombosis' },
    { label: 'Aneurismas de aorta', href: '/padecimientos/aneurismas' },
    { label: 'Ubicaciones y contacto', href: '/contacto' },
  ];

  return (
    <div className={`mobile-menu ${open ? 'open' : ''}`} onClick={onClose}>
      <div className="mobile-menu-panel" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
        <div className="mobile-menu-head">
          <h2>Menú</h2>
          <button className="mobile-menu-close" onClick={onClose} aria-label="Cerrar menú">
            ×
          </button>
        </div>

        <nav className="mobile-menu-links">
          {links.map((item) => (
            <a href={item.href} onClick={onClose} key={item.href}>
              <span>{item.label}</span>
              <span className="mobile-menu-arrow">→</span>
            </a>
          ))}
        </nav>

        <a className="mobile-menu-main-cta" href="/contacto" onClick={onClose}>
          Agendar cita
        </a>
      </div>
    </div>
  );
}