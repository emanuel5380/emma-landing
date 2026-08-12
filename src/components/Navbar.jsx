import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#sobre-mi', label: 'Sobre Mí' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navBg = scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
  const linkColor = scrolled ? 'text-slate-700 hover:text-brand-600' : 'text-white/90 hover:text-white'
  const logoText = scrolled ? 'text-brand-800' : 'text-white'
  const logoSub = scrolled ? 'text-brand-500' : 'text-blue-200'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{ background: 'linear-gradient(135deg, #2563eb, #0d9488)' }}>
              🐾
            </div>
            <div className="leading-none">
              <p className={`font-bold text-[15px] ${logoText} transition-colors`}>Dra. Emma</p>
              <p className={`text-[11px] font-medium ${logoSub} transition-colors`}>Ortopedia Veterinaria · Medellín</p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(l => (
              <a key={l.href} href={l.href}
                className={`text-[13px] font-medium transition-colors duration-200 ${linkColor}`}>
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            <a href="https://wa.me/573146436327" target="_blank" rel="noopener noreferrer"
              className="btn-primary text-[13px] px-5 py-2.5">
              Agendar Cita
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-slate-700' : 'text-white'}`}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-white border-t border-slate-100 px-4 py-4 space-y-1">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              className="block py-2.5 px-3 rounded-lg text-slate-700 font-medium hover:bg-brand-50 hover:text-brand-700 transition-colors text-sm"
              onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/573146436327" target="_blank" rel="noopener noreferrer"
            className="block mt-3 bg-brand-600 text-white text-center py-3 rounded-full font-semibold text-sm"
            onClick={() => setOpen(false)}>
            Agendar Cita
          </a>
        </div>
      </div>
    </nav>
  )
}
