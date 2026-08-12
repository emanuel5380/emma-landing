import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: '¿Cuándo necesita mi mascota un especialista en ortopedia?',
    a: 'Si tu perro o gato presenta cojera persistente, dificultad para levantarse, caminar o subir escaleras, dolor evidente o deformidad en alguna extremidad, es el momento de consultar. No esperes a que empeore.',
  },
  {
    q: '¿Cuánto tiempo dura la recuperación después de una cirugía ortopédica?',
    a: 'Depende del procedimiento. La corrección de luxación patelar requiere 4–6 semanas; técnicas como TPLO para ligamento cruzado pueden necesitar 8–12 semanas con rehabilitación supervisada.',
  },
  {
    q: '¿Qué incluye la consulta ortopédica?',
    a: 'Evaluación clínica completa, exploración ortopédica y neurológica, revisión de historial médico, interpretación de imágenes si ya las tienes, y un plan de diagnóstico o tratamiento detallado explicado con claridad.',
  },
  {
    q: '¿Atiende gatos además de perros?',
    a: '¡Sí! Estoy especializada en pequeñas especies: perros y gatos. Los felinos tienen patologías ortopédicas propias que requieren un abordaje diferente, y tengo amplia experiencia en ambas.',
  },
  {
    q: '¿Siempre es necesaria la cirugía?',
    a: 'No. En varios casos el manejo conservador con medicación, restricción de actividad y rehabilitación es suficiente. Mi objetivo es la mejor opción para tu mascota, no la más invasiva. Evaluamos cada caso individualmente.',
  },
  {
    q: '¿Cómo agendo una cita?',
    a: 'Por WhatsApp directamente. Puedo orientarte si tu caso requiere valoración presencial o si primero puedes enviarme estudios para una pre-consulta. Respondo el mismo día.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-tag">❓ Preguntas Frecuentes</span>
          <h2 className="section-heading mb-4">Resolvemos tus dudas</h2>
          <p className="text-slate-500 leading-relaxed">
            Todo lo que necesitas saber antes de tu primera consulta de ortopedia veterinaria.
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map(({ q, a }, i) => (
            <div key={i}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                open === i ? 'border-brand-200 bg-brand-50' : 'border-slate-100 bg-white'
              }`}>
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}>
                <span className="font-semibold text-slate-800 text-sm leading-snug">{q}</span>
                <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                  open === i ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{a}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-sm mt-10">
          ¿Otra pregunta?{' '}
          <a href="https://wa.me/573146436327" target="_blank" rel="noopener noreferrer"
            className="text-brand-600 font-medium hover:underline">
            Escríbeme por WhatsApp
          </a>
        </p>
      </div>
    </section>
  )
}
