import { ArrowRight, Star, ShieldCheck, MapPin } from 'lucide-react'

const HERO_BG = {
  background: 'linear-gradient(135deg, #0b1740 0%, #1e3a8a 55%, #1d4ed8 100%)',
}

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden" style={HERO_BG}>

      {/* Decorative blobs */}
      <div className="absolute top-[-120px] right-[-80px] w-[500px] h-[500px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #2dd4bf 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-80px] left-[-60px] w-72 h-72 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #60a5fa 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">

          {/* ── Left col (3/5) ── */}
          <div className="lg:col-span-3">

            {/* Location pill */}
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 text-white text-xs font-semibold px-4 py-2 rounded-full mb-8">
              <MapPin size={12} className="text-teal-300" />
              Medellín, Colombia · Especialista en Ortopedia Veterinaria
            </div>

            {/* Headline */}
            <h1 className="font-heading text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6">
              Ortopedia veterinaria{' '}
              <span style={{ color: '#2dd4bf' }}>especializada</span>
              <br className="hidden sm:block" />
              {' '}para perros y gatos en Medellín
            </h1>

            <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Soy la <strong className="text-white">Dra. Emma</strong>, veterinaria especialista en ortopedia
              y traumatología de pequeñas especies. Diagnóstico preciso, cirugía avanzada y
              rehabilitación completa para perros y gatos en Medellín.
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                { icon: <ShieldCheck size={14} />, text: 'Cirugía TPLO & TTA certificada' },
                { icon: '🐾', text: 'Solo perros y gatos' },
                { icon: '📍', text: 'Medellín · Antioquia' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 bg-white/10 border border-white/15 text-white/80 text-xs px-3 py-1.5 rounded-full">
                  {typeof item.icon === 'string' ? <span>{item.icon}</span> : item.icon}
                  {item.text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="https://wa.me/573000000000" target="_blank" rel="noopener noreferrer"
                className="btn-white">
                <span>Agendar consulta</span>
                <ArrowRight size={16} />
              </a>
              <a href="#servicios" className="btn-outline">
                Ver servicios
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-5 pt-6 border-t border-white/10">
              <div className="flex -space-x-2">
                {['🐕', '🐈', '🐩', '🐱'].map((e, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-white/15 border-2 border-white/30 flex items-center justify-center text-base">
                    {e}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-white font-bold text-sm ml-1.5">4.9</span>
                </div>
                <p className="text-white/50 text-xs mt-0.5">+180 mascotas recuperadas en Medellín</p>
              </div>
            </div>
          </div>

          {/* ── Right col (2/5) ── */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs">

              {/* Profile card */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                style={{ background: 'linear-gradient(160deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)', backdropFilter: 'blur(20px)' }}>

                {/* Photo area */}
                <div className="relative h-72 flex flex-col items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0d9488 0%, #2563eb 100%)' }}>
                  <div className="text-7xl mb-3">🩺</div>
                  <p className="text-white/40 text-xs">📸 Foto de la Dra. Emma</p>

                  {/* Available chip */}
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-emerald-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    Disponible
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <p className="font-heading text-xl font-bold text-white mb-0.5">Dra. Emma</p>
                  <p className="text-teal-300 text-xs font-semibold uppercase tracking-widest mb-4">
                    Ortopedia · Traumatología Veterinaria
                  </p>

                  <div className="space-y-2">
                    {[
                      '🎓 Médica Veterinaria y Zootecnista',
                      '🦴 Especialista en Ortopedia',
                      '🐾 Perros y Gatos exclusivamente',
                    ].map(item => (
                      <div key={item} className="flex items-center gap-2 text-white/70 text-xs">
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge — experience */}
              <div className="absolute -bottom-5 -left-8 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-slate-100">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe)' }}>
                  🏆
                </div>
                <div>
                  <p className="text-brand-900 font-bold text-sm leading-none">+6 años</p>
                  <p className="text-slate-400 text-xs mt-0.5">de experiencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom diagonal */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />
    </section>
  )
}
