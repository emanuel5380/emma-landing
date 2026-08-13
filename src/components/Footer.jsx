const FOOTER_BG = { background: '#0b1740' }
const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer style={FOOTER_BG}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                style={{ background: 'linear-gradient(135deg, #2563eb, #0d9488)' }}>
                🐾
              </div>
              <div>
                <p className="font-bold text-white text-sm">Dra. Emma</p>
                <p className="text-blue-400 text-xs">Ortopedia Veterinaria</p>
              </div>
            </div>
            <p className="text-white/35 text-sm leading-relaxed mb-5">
              Especialista en ortopedia y traumatología de pequeñas especies
              —perros y gatos— en Medellín, Colombia.
            </p>
            <p className="text-white/15 text-xs leading-relaxed">
              Veterinaria ortopedista Medellín · Cirugía veterinaria ·
              Displasia cadera · Luxación patelar · LCA perros · Rehabilitación veterinaria
            </p>
          </div>

          {/* Servicios */}
          <div>
            <p className="text-white font-semibold text-xs uppercase tracking-wider mb-5">Servicios</p>
            <ul className="space-y-3">
              {[
                'Cirugía de Fracturas y Luxaciones',
                'Ruptura de Ligamento Cruzado',
                'Displasia de Cadera y Codo',
                'Enfermedades Articulares y Artrosis',
                'Rehabilitación Postquirúrgica',
                'Luxación Patelar',
              ].map(s => (
                <li key={s}>
                  <a href="#servicios" className="text-white/40 text-sm hover:text-blue-300 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegación */}
          <div>
            <p className="text-white font-semibold text-xs uppercase tracking-wider mb-5">Navegación</p>
            <ul className="space-y-3">
              {[
                ['Inicio', '#inicio'],
                ['Sobre Mí', '#sobre-mi'],
                ['Proceso', '#proceso'],
                ['Testimonios', '#testimonios'],
                ['Contacto', '#contacto'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-white/40 text-sm hover:text-blue-300 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-white font-semibold text-xs uppercase tracking-wider mb-5">Contacto</p>
            <div className="space-y-4">
              {[
                { label: 'WhatsApp', val: '+57 314 643 6327', href: 'https://wa.me/573146436327' },
                { label: 'Ubicación', val: 'Medellín, Antioquia', href: null },
                { label: 'Horario', val: 'Lun – Sáb: 8am – 6pm', href: null },
              ].map(({ label, val, href }) => (
                <div key={label}>
                  <p className="text-white/25 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                  {href
                    ? <a href={href} target="_blank" rel="noopener noreferrer"
                        className="text-white/60 text-sm hover:text-blue-300 transition-colors">{val}</a>
                    : <p className="text-white/60 text-sm">{val}</p>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/20 text-xs">
            © {year} Dra. Emma — Ortopedia Veterinaria Medellín
          </p>
          <p className="text-white/10 text-xs">
            Especialista en ortopedia de pequeñas especies · Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}
