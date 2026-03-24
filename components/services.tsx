"use client"

import { useEffect, useRef } from "react"
import { Target, Eye } from "lucide-react"

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)
  const visionRef = useRef<HTMLDivElement>(null)

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
      { threshold: 0.15 },
    )

    ;[sectionRef, missionRef, visionRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" className="section-padding bg-white overflow-hidden">
      <div ref={sectionRef} className="container-custom scroll-reveal">
        <div className="text-center mb-10">
          <span className="inline-block text-[#eab530] font-semibold text-sm uppercase tracking-widest mb-3">Quiénes Somos</span>
          <h2 className="mb-4 text-[#143f7a]">Nosotros</h2>
          <p className="max-w-2xl mx-auto text-[#5e5d5d] text-lg">
            Somos un equipo familiar con más de 15 años de experiencia en el rubro, respaldados por la
            Superintendencia de Valores y Seguros.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 max-w-6xl mx-auto">
          {/* Misión */}
          <div ref={missionRef} className="scroll-reveal-left group relative">
            <div className="relative h-72 lg:h-full overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                alt="Nuestra Misión"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#143f7a]/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#eab530] flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#143f7a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">Nuestra Misión</h3>
                </div>
              </div>
            </div>
          </div>
          <div ref={missionRef} className="scroll-reveal-right bg-gray-50 p-8 lg:p-12 flex items-center rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none">
            <p className="text-[#5e5d5d] text-lg leading-relaxed">
              Ofrecemos asesoría profesional para protegerlo a usted, su familia, su patrimonio o empresa,
              del riesgo que presentan las faenas diarias. Lo invitamos a eliminar la incertidumbre de su
              vida con la certeza de una cobertura diseñada para usted.
            </p>
          </div>

          {/* Visión */}
          <div className="scroll-reveal-left bg-[#143f7a] p-8 lg:py-12 lg:px-14 flex items-center rounded-b-2xl lg:rounded-l-2xl lg:rounded-br-none mt-4 lg:mt-0 order-2 lg:order-none">
            <p className="text-gray-200 text-lg leading-relaxed">
              Nuestros deseos se desarrollan en un mejor bienestar, garantizando seguridad en vuestros planes
              tales como la formación de la familia, resguardo patrimonial, proyección de los sueños que son posibles,
              educar, ahorrar y salud. Nuestro equipo humano está preparado para asesorarlo y guiar a un buen fin.
            </p>
          </div>
          <div ref={visionRef} className="scroll-reveal-right group relative order-1 lg:order-none mt-4 lg:mt-0">
            <div className="relative h-72 lg:h-full overflow-hidden rounded-t-2xl lg:rounded-r-2xl lg:rounded-tl-none">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                alt="Nuestra Visión"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#143f7a]/80 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#eab530] flex items-center justify-center">
                    <Eye className="w-5 h-5 text-[#143f7a]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">Nuestra Visión</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
