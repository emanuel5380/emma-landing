import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'María Camila R.',
    pet: 'Mamá de Toby · Golden Retriever',
    avatar: '👩‍🦱',
    stars: 5,
    text: 'Toby rompió su ligamento y la Dra. Emma fue increíble. Explicó todo con paciencia, la cirugía salió perfecta y hoy corre como si nada. ¡100% recomendada!',
  },
  {
    name: 'Andrés Felipe M.',
    pet: 'Papá de Luna · Chihuahua',
    avatar: '👨',
    stars: 5,
    text: 'Luna tenía luxación de rótula grado III. Gracias a la Dra. Emma hoy camina sin dolor. La atención fue impecable y el seguimiento post-operatorio, excepcional.',
  },
  {
    name: 'Valentina G.',
    pet: 'Mamá de Misha · Gata persa',
    avatar: '👩',
    stars: 5,
    text: 'Misha sufrió una fractura de pelvis y la recuperación fue sorprendentemente rápida. La Dra. Emma es un tesoro para las mascotas de Medellín.',
  },
  {
    name: 'Carlos E.',
    pet: 'Papá de Rocky · Bulldog Francés',
    avatar: '🧔',
    stars: 5,
    text: 'Rocky tiene displasia de cadera. El manejo conservador de la Dra. Emma evitó una cirugía mayor. El plan de rehabilitación fue clave en su mejoría.',
  },
  {
    name: 'Sofía B.',
    pet: 'Mamá de Coco · Poodle miniatura',
    avatar: '👩‍🦰',
    stars: 5,
    text: 'Profesional, empática y súper actualizada. Diagnosticó a Coco en la primera consulta, la cirugía fue perfecta y el post-operatorio excelente.',
  },
  {
    name: 'Daniela V.',
    pet: 'Mamá de Thor · Labrador',
    avatar: '👩‍🦳',
    stars: 5,
    text: 'Thor se fracturó una pata y estábamos desesperados. La Dra. Emma nos atendió con rapidez. Tres meses después, Thor está completamente recuperado.',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-24 bg-sky-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="section-tag">⭐ Testimonios</span>
          <h2 className="section-heading mb-4">Lo que dicen las familias</h2>
          <p className="text-slate-500 leading-relaxed">
            Más de 180 mascotas han recuperado su calidad de vida con atención ortopédica especializada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map(({ name, pet, avatar, stars, text }) => (
            <div key={name} className="card p-6 flex flex-col">
              <Stars count={stars} />
              <p className="text-slate-600 text-sm leading-relaxed mt-4 flex-1">"{text}"</p>
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-slate-100">
                <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  {avatar}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">{name}</p>
                  <p className="text-slate-400 text-xs">{pet}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-14 grid grid-cols-3 gap-px bg-slate-200 rounded-2xl overflow-hidden shadow-sm max-w-lg mx-auto">
          {[
            { val: '4.9', label: 'Calificación', sub: '5 estrellas' },
            { val: '+180', label: 'Pacientes', sub: 'en Medellín' },
            { val: '98%', label: 'Recuperación', sub: 'completa' },
          ].map(({ val, label, sub }) => (
            <div key={label} className="bg-white flex flex-col items-center justify-center py-6 px-4 text-center">
              <p className="font-heading text-3xl font-bold text-brand-600">{val}</p>
              <p className="text-slate-700 font-medium text-xs mt-1">{label}</p>
              <p className="text-slate-400 text-xs">{sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
