"use client"

import { useEffect, useRef } from "react"
import { ClipboardCheck, Settings, Zap } from "lucide-react"

const steps = [
  {
    icon: <ClipboardCheck className="w-10 h-10 text-primary" />,
    title: "Diagnóstico",
    description:
      "Analizamos a fondo las necesidades específicas de tu empresa para identificar oportunidades de mejora.",
  },
  {
    icon: <Settings className="w-10 h-10 text-primary" />,
    title: "Personalización",
    description: "Diseñamos soluciones a medida que se adaptan perfectamente a los requerimientos de tu negocio.",
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: "Implementación",
    description: "Ponemos en marcha las soluciones con un enfoque ágil y eficiente, asegurando resultados óptimos.",
  },
]

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

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

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id="como-funciona" className="section-padding bg-gray-50">
      <div ref={sectionRef} className="container-custom opacity-0 translate-y-10 transition-all duration-700">
        <div className="text-center mb-16">
          <h2 className="mb-4">Cómo Funciona</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Nuestro proceso está diseñado para garantizar soluciones efectivas y adaptadas a tus necesidades
            específicas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepsRef.current[index] = el)}
              className="flex items-start gap-6 mb-12 opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
