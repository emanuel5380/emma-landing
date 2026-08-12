const stats = [
  { value: '+50',  label: 'Cirugías ortopédicas', icon: '✂️', color: '#2563eb' },
  { value: '3',    label: 'Años dedicados a ortopedia', icon: '🏆', color: '#0d9488' },
  { value: '4.9★', label: 'Calificación promedio', icon: '⭐', color: '#f59e0b' },
  { value: '100%', label: 'Compromiso con cada paciente', icon: '💚', color: '#22c55e' },
]

export default function Stats() {
  return (
    <section className="bg-white py-12 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map(({ value, label, icon, color }) => (
            <div key={label}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-sky-light hover:shadow-sm transition-shadow duration-300">
              <span className="text-3xl mb-3">{icon}</span>
              <p className="font-heading text-3xl font-bold mb-1" style={{ color }}>{value}</p>
              <p className="text-slate-500 text-sm leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
