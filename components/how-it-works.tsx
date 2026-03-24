"use client"

import { useEffect, useRef } from "react"
import { Heart, PiggyBank, Clock, Plane, TrendingUp, UserCheck } from "lucide-react"

const segurosVida = [
  {
    icon: <PiggyBank className="w-8 h-8" />,
    title: "Seguros Ahorro Individual",
    items: [
      "Seguros de protección con ahorro a plazos definidos",
      "Seguros de protección familiar con ahorro",
      "Seguros con ahorro flexibles",
    ],
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Seguros Temporales",
    items: [
      "Seguros de protección vida entera, sin ahorro",
      "Seguros de protección a plazo fijo",
      "Seguros de protección familiares, sin ahorro",
    ],
    image: "https://images.unsplash.com/photo-1516733968668-dbdce39c0571?w=600&q=80",
  },
  {
    icon: <Plane className="w-8 h-8" />,
    title: "Seguros Viaje",
    items: [
      "Seguros de Vida complementarios con salud",
      "Seguros de Vida a plazo fijo",
    ],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "APV",
    items: [
      "Seguros ahorro previsional voluntario, régimen A",
      "Seguros ahorro previsional voluntario, régimen B",
    ],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "Accidentes Personales",
    items: [
      "Muerte Accidental",
      "Invalidez Accidental",
      "Gastos Médicos Accidentales",
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
  },
]

export default function HowItWorks() {
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
    <section id="seguros-vida" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div ref={sectionRef} className="container-custom scroll-reveal">
        <div className="text-center mb-16">
          <span className="inline-block text-[#eab530] font-semibold text-sm uppercase tracking-widest mb-3">Protección Familiar</span>
          <h2 className="mb-4 text-[#143f7a]">Seguros de Vida</h2>
          <div className="flex justify-center mb-6">
            <Heart className="w-10 h-10 text-[#eab530]" />
          </div>
          <p className="max-w-2xl mx-auto text-[#5e5d5d] text-lg">
            Protege a tu familia y asegura su futuro con nuestras soluciones de vida, ahorro y previsión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segurosVida.map((seguro, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el }}
              className="scroll-reveal group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={seguro.image}
                  alt={seguro.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#143f7a]/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[#eab530] flex items-center justify-center text-[#143f7a]">
                    {seguro.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">{seguro.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {seguro.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#5e5d5d] text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#eab530] mt-1.5 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
