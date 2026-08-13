import { ArrowRight } from 'lucide-react'

const services = [
  {
    emoji: '🦴',
    title: 'Cirugía de Fracturas y Luxaciones',
    description: 'Reducción y estabilización de fracturas y luxaciones con placas, tornillos y fijadores externos.',
    tags: ['Placas y tornillos', 'Fijadores externos', 'Reducción abierta'],
  },
  {
    emoji: '🔗',
    title: 'Ruptura de Ligamento Cruzado',
    description: 'Estabilización articular mediante TPLO o técnica extracapsular, según cada caso. La cirugía modifica la biomecánica de la articulación para que ya no dependa del ligamento.',
    tags: ['TPLO', 'Extracapsular', 'Manejo post-op'],
  },
  {
    emoji: '🐾',
    title: 'Displasia de Cadera y Codo',
    description: 'Evaluación radiográfica y manejo quirúrgico o conservador según el grado de la displasia.',
    tags: ['Evaluación radiográfica', 'Manejo conservador', 'Manejo quirúrgico'],
  },
  {
    emoji: '🔍',
    title: 'Enfermedades Articulares y Artrosis',
    description: 'Diagnóstico y tratamiento del dolor asociado a artrosis y otras enfermedades articulares crónicas.',
    tags: ['Manejo del dolor', 'Seguimiento', 'Calidad de vida'],
  },
  {
    emoji: '💪',
    title: 'Rehabilitación Post-Quirúrgica',
    description: 'Diseño de planes de recuperación funcional, en coordinación con fisioterapia especializada.',
    tags: ['Plan funcional', 'Seguimiento', 'Fisioterapia coordinada'],
  },
  {
    emoji: '🦵',
    title: 'Luxación de Rótula',
    description: 'Corrección quirúrgica mediante trocleoplastia, transposición de la tuberosidad tibial u otras técnicas según el grado.',
    tags: ['Trocleoplastia', 'Transposición tibial', 'Grados I – IV'],
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
            Atención ortopédica integral para perros y gatos. Utilizamos estudios de imagen
            (radiografía y, según disponibilidad, tomografía y RM) para un diagnóstico preciso,
            y acompañamos a cada paciente durante todo su proceso de recuperación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ emoji, title, description, tags }) => (
            <div key={title} className="card p-6 group">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5 bg-brand-50 group-hover:bg-brand-100 transition-colors">
                {emoji}
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-900 mb-2">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map(t => (
                  <span key={t} className="text-xs bg-brand-50 text-brand-600 font-medium px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
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
