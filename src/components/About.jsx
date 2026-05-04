import { CheckCircle2, ArrowRight } from 'lucide-react'

const credentials = [
  { icon: '🎓', title: 'Médica Veterinaria y Zootecnista' },
  { icon: '🦴', title: 'Especialista en Ortopedia y Traumatología Veterinaria' },
  { icon: '🔬', title: 'Certificada en técnicas TPLO y TTA' },
  { icon: '🌎', title: 'Actualización en congresos internacionales' },
]

const strengths = [
  'Diagnóstico claro y explicado sin tecnicismos',
  'Técnicas quirúrgicas mínimamente invasivas',
  'Atención exclusiva para perros y gatos',
  'Seguimiento post-operatorio incluido en cada caso',
  'Comunicación directa y honesta con la familia',
]

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #0d9488 100%)' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <div className="text-8xl mb-4">👩‍⚕️</div>
                <p className="text-white/40 text-sm">📸 Foto profesional de la Dra. Emma</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3"
                style={{ background: 'linear-gradient(to top, rgba(30,58,138,0.8), transparent)' }} />
            </div>

            {/* Floating credential */}
            <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 max-w-[190px]">
              <p className="text-brand-700 font-bold text-sm">Dra. Emma</p>
              <p className="text-slate-400 text-xs mt-0.5 leading-tight">Ortopedia Veterinaria · Medellín</p>
              <div className="mt-2 flex gap-1 text-xl">🐕🐈</div>
            </div>

            {/* Dot grid */}
            <div className="absolute -top-6 -left-6 w-20 h-20 opacity-15"
              style={{ backgroundImage: 'radial-gradient(circle, #2563eb 1.5px, transparent 1.5px)', backgroundSize: '10px 10px' }} />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="section-tag">🐾 Sobre Mí</span>
            <h2 className="section-heading mb-6">
              Apasionada por devolverle la movilidad a tu mascota
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              Soy médica veterinaria con especialización en ortopedia y traumatología de pequeñas
              especies. Mi enfoque es exclusivo: solo atiendo perros y gatos, lo que me permite
              profundizar y perfeccionar mis habilidades en cada procedimiento.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Creo que cada mascota merece un plan individual, con acompañamiento real desde
              la primera consulta hasta la recuperación total. Mi compromiso es con ellos y
              con la tranquilidad de su familia.
            </p>

            <ul className="space-y-3 mb-10">
              {strengths.map(s => (
                <li key={s} className="flex items-start gap-3 text-slate-600 text-sm">
                  <CheckCircle2 size={16} className="text-teal-500 mt-0.5 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>

            <a href="https://wa.me/573000000000" target="_blank" rel="noopener noreferrer"
              className="btn-primary">
              Hablar con la Dra. Emma
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Credentials */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          {credentials.map(({ icon, title }) => (
            <div key={title} className="flex items-start gap-3 bg-sky-light rounded-2xl p-4">
              <span className="text-2xl">{icon}</span>
              <p className="text-slate-700 font-medium text-sm leading-snug">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
