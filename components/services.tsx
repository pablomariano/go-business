"use client"

import { useEffect, useRef } from "react"
import { Truck, Package, Users, Wrench } from "lucide-react"

const services = [
  {
    icon: <Truck className="w-12 h-12 text-primary" />,
    title: "Bodega y Logística",
    description: "Soluciones integrales de almacenamiento y distribución para optimizar tu cadena de suministro.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: <Package className="w-12 h-12 text-primary" />,
    title: "Abastecimiento y Suministro",
    description: "Gestión eficiente de compras y aprovisionamiento para garantizar la continuidad de tu negocio.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Outsourcing y Servicios Transitorios",
    description: "Personal calificado y servicios temporales adaptados a las necesidades específicas de tu empresa.",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: <Wrench className="w-12 h-12 text-primary" />,
    title: "Servicios Generales",
    description:
      "Mantenimiento, limpieza y otros servicios esenciales para el funcionamiento óptimo de tus instalaciones.",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-10")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="servicios" className="section-padding bg-white">
      <div ref={sectionRef} className="container-custom opacity-0 translate-y-10 transition-all duration-700">
        <div className="text-center mb-16">
          <h2 className="mb-4">Nuestros Servicios</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Ofrecemos soluciones personalizadas en cuatro áreas claves para impulsar el crecimiento y la eficiencia de
            tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="card opacity-0 translate-y-10 transition-all duration-700 overflow-hidden"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{service.icon}</div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
