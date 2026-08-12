const items = [
  {
    src: '/assets/IMG_20250904_134510_004.jpg',
    alt: 'Dra. Emma Salomé Escobar realizando cirugía ortopédica veterinaria en Medellín',
    label: 'Cirugía ortopédica',
    tag: 'Quirófano',
  },
  {
    src: '/assets/20250427_131511~2.jpg',
    alt: 'Consulta ortopédica veterinaria — beagle con la Dra. Emma en Medellín',
    label: 'Consulta ortopédica',
    tag: 'Diagnóstico',
  },
  {
    src: '/assets/20260513_095050.jpg',
    alt: 'Exploración ortopédica de extremidades en perro',
    label: 'Exploración ortopédica',
    tag: 'Evaluación',
  },
  {
    src: '/assets/IMG-2026001123.jpg',
    alt: 'Dra. Emma Escobar — procedimiento ortopédico en Medellín',
    label: 'Procedimiento ortopédico',
    tag: 'Clínica',
  },
]

export default function Gallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="section-tag">📸 Mi Trabajo</span>
          <h2 className="section-heading mb-4">
            Casos reales, resultados reales
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Cada procedimiento refleja el compromiso con la precisión, el cuidado
            y la recuperación total de cada paciente.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 gap-4">
          {items.map(item => (
            <div key={item.src} className="break-inside-avoid mb-4 group relative rounded-2xl overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-xs font-bold text-teal-300 uppercase tracking-widest">{item.tag}</span>
                <p className="text-white font-semibold text-sm mt-0.5">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
