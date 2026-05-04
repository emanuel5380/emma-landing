const DARK_BG = {
  background: 'linear-gradient(135deg, #0b1740 0%, #1e3a8a 100%)',
}

const steps = [
  { num: '01', icon: '📋', title: 'Consulta Inicial', desc: 'Evaluación clínica y ortopédica completa. Revisamos historial médico y exploramos a tu mascota a fondo.' },
  { num: '02', icon: '🔬', title: 'Diagnóstico',      desc: 'Radiografías y estudios de imagen para confirmar el diagnóstico con precisión y sin suposiciones.' },
  { num: '03', icon: '📝', title: 'Plan de Tratamiento', desc: 'Te explico las opciones disponibles —quirúrgicas o conservadoras— y diseñamos el mejor camino juntos.' },
  { num: '04', icon: '⚕️', title: 'Procedimiento',    desc: 'Cirugía u ortopedia con tecnología de punta, protocolos anestésicos seguros y máximo cuidado.' },
  { num: '05', icon: '💪', title: 'Recuperación',     desc: 'Plan de rehabilitación personalizado con controles periódicos para garantizar una recuperación completa.' },
]

export default function Process() {
  return (
    <section id="proceso" className="py-24 relative overflow-hidden" style={DARK_BG}>
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #2dd4bf, transparent)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-white/10 text-teal-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            ⚕️ Proceso de Atención
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Así cuidamos a tu mascota, paso a paso
          </h2>
          <p className="text-white/50 leading-relaxed">
            Desde la primera cita hasta la recuperación total, estás acompañado en cada etapa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map(({ num, icon, title, desc }) => (
            <div key={num} className="relative flex flex-col items-center text-center">
              {/* Number chip */}
              <div className="text-[10px] font-bold text-teal-400 tracking-widest uppercase mb-3">{num}</div>

              {/* Icon circle */}
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 border border-white/10"
                style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(10px)' }}>
                {icon}
              </div>

              <h3 className="font-heading text-base font-bold text-white mb-2">{title}</h3>
              <p className="text-white/45 text-xs leading-relaxed">{desc}</p>

              {/* Connector — only between items on desktop */}
              {num !== '05' && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] right-0 h-px"
                  style={{ background: 'linear-gradient(to right, rgba(45,212,191,0.4), transparent)' }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
