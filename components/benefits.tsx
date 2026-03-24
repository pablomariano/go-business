"use client"

import { useEffect, useRef } from "react"
import { Shield, Flame, Car, HardHat, Scale, Ship, Construction } from "lucide-react"

const segurosGenerales = [
  {
    icon: <Flame className="w-7 h-7" />,
    title: "Seguros de Incendios",
    description: "Protección integral contra incendios para tu hogar o empresa",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  },
  {
    icon: <Car className="w-7 h-7" />,
    title: "Seguros Automóviles",
    description: "Cobertura completa para tu vehículo ante cualquier siniestro",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600&q=80",
  },
  {
    icon: <HardHat className="w-7 h-7" />,
    title: "Seguros Equipos Móviles",
    description: "Protección para maquinaria y equipos en operación",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  },
  {
    icon: <Scale className="w-7 h-7" />,
    title: "Seguros RC",
    description: "Responsabilidad civil ante daños a terceros",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
  },
  {
    icon: <Construction className="w-7 h-7" />,
    title: "Todo Riesgo Construcción",
    description: "Cobertura completa para obras y proyectos en construcción",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
  },
  {
    icon: <Ship className="w-7 h-7" />,
    title: "Transporte Marítimo",
    description: "Seguros generales de transporte marítimo de carga",
    image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?w=600&q=80",
  },
]

export default function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

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

    if (sectionRef.current) observer.observe(sectionRef.current)
    cardsRef.current.forEach((card) => { if (card) observer.observe(card) })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="seguros-generales" className="section-padding bg-[#143f7a] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#eab530]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#eab530]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div ref={sectionRef} className="container-custom relative z-10 scroll-reveal">
        <div className="text-center mb-16">
          <span className="inline-block text-[#eab530] font-semibold text-sm uppercase tracking-widest mb-3">Protección Patrimonial</span>
          <h2 className="mb-4 text-white">Seguros Generales</h2>
          <div className="flex justify-center mb-6">
            <Shield className="w-10 h-10 text-[#eab530]" />
          </div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Protege tu patrimonio, vehículos, propiedades y empresa con nuestras coberturas integrales.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {segurosGenerales.map((seguro, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el }}
              className="scroll-reveal group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64">
                <img
                  src={seguro.image}
                  alt={seguro.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-[#143f7a]/90 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#eab530] flex items-center justify-center text-[#143f7a] group-hover:scale-110 transition-transform duration-300">
                      {seguro.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white font-display">{seguro.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {seguro.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 scroll-reveal">
          <p className="text-gray-300 text-lg mb-6">
            Llama sin compromiso y te asesoraremos en la mejor opción para tener una vida asegurada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+56990161539" className="btn-accent rounded-full inline-flex items-center justify-center gap-2">
              Llámenos al (+56 9) 90161539
            </a>
            <a href="#contacto" className="px-8 py-3.5 rounded-full border-2 border-[#eab530]/30 text-[#eab530] hover:bg-[#eab530]/10 transition-all duration-300 font-medium text-center">
              Ir a contacto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
