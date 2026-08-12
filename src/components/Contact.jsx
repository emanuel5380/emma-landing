import { MapPin, Clock, ArrowRight } from 'lucide-react'

const CONTACT_BG = {
  background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #0d9488 100%)',
}

export default function Contact() {
  return (
    <section id="contacto" className="py-24 relative overflow-hidden" style={CONTACT_BG}>
      {/* Glow */}
      <div className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #2dd4bf 0%, transparent 50%), radial-gradient(circle at 80% 50%, #60a5fa 0%, transparent 50%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              📞 Contáctanos
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              ¿Tu mascota necesita atención ortopédica?
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              No dejes que el dolor espere. Escríbeme hoy y te respondo en minutos.
              Atiendo en Medellín, Antioquia.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: <MapPin size={18} className="text-teal-300" />, label: 'Ubicación', value: 'Medellín, Antioquia, Colombia' },
                { icon: <Clock size={18} className="text-teal-300" />, label: 'Horario', value: 'Lun – Sáb: 8:00 am – 6:00 pm' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wider">{label}</p>
                    <p className="text-white font-medium text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/573146436327?text=Hola%20Dra.%20Emma%2C%20quiero%20agendar%20una%20consulta%20de%20ortopedia%20veterinaria."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5e] text-white px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 shadow-xl hover:-translate-y-0.5">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escribir por WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Right card */}
          <div className="bg-white/10 border border-white/20 rounded-3xl p-8 text-center"
            style={{ backdropFilter: 'blur(20px)' }}>
            <div className="text-6xl mb-5">🐾</div>
            <h3 className="font-heading text-2xl font-bold text-white mb-3">
              Primera Consulta
            </h3>
            <p className="text-white/60 text-sm leading-relaxed mb-7">
              Agenda tu valoración ortopédica. Incluye evaluación clínica completa
              y plan de diagnóstico personalizado para tu perro o gato.
            </p>
            <div className="space-y-2.5 mb-8 text-left">
              {[
                'Evaluación biomecánica completa',
                'Orientación sobre diagnóstico',
                'Plan de tratamiento individualizado',
                'Respuesta el mismo día',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-white/75 text-sm">
                  <span className="text-teal-300">✓</span>
                  {item}
                </div>
              ))}
            </div>
            <a
              href="https://wa.me/573146436327?text=Hola%20Dra.%20Emma%2C%20quiero%20agendar%20una%20consulta%20de%20ortopedia%20veterinaria."
              target="_blank" rel="noopener noreferrer"
              className="btn-white w-full justify-center">
              Agendar Ahora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
