import { ArrowRight } from 'lucide-react'

const services = [
  {
    emoji: '🦴',
    title: 'Cirugía de fracturas y luxaciones',
    description: 'Reducción y estabilización con placas, tornillos y fijadores externos.',
  },
  {
    emoji: '🔗',
    title: 'Ruptura de ligamento cruzado',
    description: 'Técnicas como TPLO, o extracapsular, según el caso.',
  },
  {
    emoji: '🐾',
    title: 'Displasia de cadera y codo',
    description: 'Evaluación radiográfica y manejo quirúrgico o conservador.',
  },
  {
    emoji: '🔍',
    title: 'Enfermedades articulares y artrosis',
    description: 'Tratamiento del dolor.',
  },
  {
    emoji: '💪',
    title: 'Rehabilitación postquirúrgica',
    description: 'Planes de recuperación funcional y fisioterapia.',
  },
  {
    emoji: '🦵',
    title: 'Luxación patelar',
    description: 'Corrección quirúrgica mediante trocleoplastia, transposición de la tuberosidad tibial u otras técnicas según el grado.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-sky-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">🩺 Servicios Especializados</span>
          <h2 className="section-heading mb-4">
            Ortopedia veterinaria de alto nivel para tu mascota
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Utilizamos estudios de imagen (radiografía, y según disponibilidad, tomografía y RM)
            para un diagnóstico preciso, y acompañamos a cada paciente durante todo su proceso
            de recuperación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {services.map(({ emoji, title, description }) => (
            <div key={title} className="card p-6 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 bg-brand-50 group-hover:bg-brand-100 transition-colors">
                {emoji}
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://wa.me/573146436327" target="_blank" rel="noopener noreferrer"
            className="btn-primary">
            Consultar mi caso
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
