"use client"

import { useEffect, useRef } from "react"
import { CheckCircle } from "lucide-react"

const benefits = [
  "Reducción de costos operativos hasta en un 30%",
  "Mayor eficiencia en la gestión de recursos",
  "Flexibilidad para adaptarse a las necesidades cambiantes",
  "Acceso a profesionales altamente calificados",
  "Optimización de procesos logísticos y de suministro",
  "Mejora en la satisfacción de clientes y empleados",
]

export default function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0", "translate-x-0")
            entry.target.classList.remove("opacity-0", "translate-y-10", "translate-x-10", "-translate-x-10")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    if (textRef.current) {
      observer.observe(textRef.current)
    }

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    benefitsRef.current.forEach((benefit) => {
      if (benefit) observer.observe(benefit)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="beneficios" className="section-padding bg-white">
      <div ref={sectionRef} className="container-custom opacity-0 translate-y-10 transition-all duration-700">
        <div className="text-center mb-16">
          <h2 className="mb-4">Beneficios</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Trabajar con Go Business te brinda ventajas competitivas significativas para el crecimiento de tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="opacity-0 -translate-x-10 transition-all duration-700">
            <h3 className="text-2xl font-bold mb-6">Potencia tu empresa con nuestras soluciones</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  ref={(el) => (benefitsRef.current[index] = el)}
                  className="flex items-start gap-3 opacity-0 translate-y-10 transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div ref={imageRef} className="opacity-0 translate-x-10 transition-all duration-700 delay-300">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-full opacity-20"></div>
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Beneficios de Go Business"
                className="w-full h-auto rounded-xl shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
