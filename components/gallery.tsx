"use client"

import { useEffect, useRef } from "react"
import { Activity, Stethoscope, HeartPulse } from "lucide-react"
import Link from "next/link"

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    ;[sectionRef, leftRef, rightRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="seguros-salud" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div ref={sectionRef} className="container-custom scroll-reveal">
        <div className="text-center mb-16">
          <span className="inline-block text-[#eab530] font-semibold text-sm uppercase tracking-widest mb-3">Tu Bienestar</span>
          <h2 className="mb-4 text-[#143f7a]">Seguros Complementarios de Salud</h2>
          <div className="flex justify-center mb-6">
            <Activity className="w-10 h-10 text-[#eab530]" />
          </div>
          <p className="max-w-3xl mx-auto text-[#5e5d5d] text-lg">
            Los Seguros complementarios de Salud te permiten hacer un reembolso adicional al de tu Isapre o Fonasa
            por los gastos médicos generados por cualquier enfermedad o accidente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Reembolsos Gastos Médicos */}
          <div ref={leftRef} className="scroll-reveal-left group">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80"
                  alt="Gastos Médicos"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#143f7a]/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#eab530] flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-[#143f7a]" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">Reembolsos Gastos Médicos</h3>
                </div>
              </div>
              <div className="px-8 pt-6 pb-8">
                <p className="text-[#5e5d5d] mb-4">
                  Reembolsos de Gastos Ambulatorios y Hospitalarios en Planes Colectivos.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#143f7a]/5 text-[#143f7a] text-sm rounded-full font-medium">Ambulatorio</span>
                  <span className="px-3 py-1 bg-[#143f7a]/5 text-[#143f7a] text-sm rounded-full font-medium">Hospitalario</span>
                  <span className="px-3 py-1 bg-[#143f7a]/5 text-[#143f7a] text-sm rounded-full font-medium">Maternidad</span>
                  <span className="px-3 py-1 bg-[#143f7a]/5 text-[#143f7a] text-sm rounded-full font-medium">Salud Mental</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gastos Mayores */}
          <div ref={rightRef} className="scroll-reveal-right group">
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80"
                  alt="Gastos Mayores"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#143f7a]/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#eab530] flex items-center justify-center">
                    <HeartPulse className="w-6 h-6 text-[#143f7a]" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">Reembolsos Gastos Mayores</h3>
                </div>
              </div>
              <div className="px-8 pt-6 pb-8">
                <p className="text-[#5e5d5d] mb-4">
                  Reembolsos de Gastos Médicos en planes con deducibles en Planes Individuales.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#143f7a]/5 text-[#143f7a] text-sm rounded-full font-medium">Individual</span>
                  <span className="px-3 py-1 bg-[#143f7a]/5 text-[#143f7a] text-sm rounded-full font-medium">Deducible</span>
                  <span className="px-3 py-1 bg-[#143f7a]/5 text-[#143f7a] text-sm rounded-full font-medium">Gastos Mayores</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-10 bg-gradient-to-r from-[#143f7a] to-[#1a5099] rounded-2xl p-8 md:p-12 text-center scroll-reveal">
          <h3 className="text-2xl md:text-3xl font-bold text-white font-display mb-4">¿Desea Asesoría Personalizada?</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Escríbanos y nos contactaremos contigo para ver qué es lo que más te conviene.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contacto" className="btn-accent rounded-full">
              Escríbanos
            </Link>
            <a href="mailto:contacto@lypcorredores.cl" className="px-8 py-3.5 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 font-medium text-center">
              contacto@lypcorredores.cl
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
