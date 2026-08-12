import { ArrowRight } from 'lucide-react'

const services = [
  {
    emoji: '🔍',
    title: 'Diagnóstico Ortopédico',
    description: 'Evaluación biomecánica completa con estudios radiográficos e imagen avanzada para un diagnóstico preciso y oportuno.',
    tags: ['Radiografías', 'Ecografía', 'Evaluación funcional'],
  },
  {
    emoji: '🦴',
    title: 'Cirugía de Fracturas',
    description: 'Reparación de fracturas en huesos largos, pelvis, columna y articulaciones utilizando implantes de última generación.',
    tags: ['Fijación interna', 'Placas y tornillos', 'Clavos intramedulares'],
  },
  {
    emoji: '🔗',
    title: 'Reparación de Ligamentos',
    description: 'Reconstrucción del ligamento cruzado craneal con cirugía TPLO, técnica de referencia actual en la ortopedia veterinaria de pequeñas especies.',
    tags: ['TPLO', 'Sutura lateral', 'Manejo post-op'],
  },
  {
    emoji: '🦵',
    title: 'Luxación de Rótula',
    description: 'Corrección quirúrgica de luxación patelar medial y lateral, la condición ortopédica más común en razas pequeñas.',
    tags: ['Grados I – IV', 'Transposición', 'Corrección troclear'],
  },
  {
    emoji: '🐾',
    title: 'Displasia de Cadera y Codo',
    description: 'Diagnóstico y manejo quirúrgico de displasia articular. Desde opciones conservadoras hasta FHO y prótesis total.',
    tags: ['FHO', 'DPO / TPO', 'Prótesis total'],
  },
  {
    emoji: '💪',
    title: 'Rehabilitación Post-Quirúrgica',
    description: 'Programa personalizado de fisioterapia para una recuperación óptima, con seguimiento periódico incluido.',
    tags: ['Hidroterapia', 'Ultrasonido', 'Ejercicios guiados'],
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
            Atención ortopédica integral para perros y gatos, desde el diagnóstico
            hasta la rehabilitación completa.
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
