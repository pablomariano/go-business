"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Go Business transformó completamente nuestra cadena de suministro. Ahora operamos con mayor eficiencia y menores costos.",
    author: "María Rodríguez",
    position: "Directora de Operaciones, Minera Andina",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "El servicio de outsourcing nos permitió acceder a talento especializado justo cuando lo necesitábamos para nuestro proyecto de expansión.",
    author: "Carlos Mendoza",
    position: "CEO, TechSolutions",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "La gestión logística de Go Business ha sido fundamental para nuestra expansión internacional. Un socio confiable y eficiente.",
    author: "Ana Martínez",
    position: "Gerente de Logística, Exportadora del Sur",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Gracias a los servicios generales de Go Business, podemos concentrarnos en nuestro core business mientras ellos se encargan del resto.",
    author: "Roberto Sánchez",
    position: "Director General, Banco Comercial",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const testimonialRef = useRef<HTMLDivElement>(null)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

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

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (testimonialRef.current) {
      testimonialRef.current.classList.remove("opacity-100")
      testimonialRef.current.classList.add("opacity-0", "translate-y-5")

      setTimeout(() => {
        if (testimonialRef.current) {
          testimonialRef.current.classList.remove("opacity-0", "translate-y-5")
          testimonialRef.current.classList.add("opacity-100", "translate-y-0")
        }
      }, 300)
    }
  }, [currentIndex])

  return (
    <section id="testimonios" className="section-padding bg-gray-50">
      <div ref={sectionRef} className="container-custom opacity-0 translate-y-10 transition-all duration-700">
        <div className="text-center mb-16">
          <h2 className="mb-4">Lo que dicen nuestros clientes</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Empresas de diversos sectores confían en nuestras soluciones para impulsar su crecimiento.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div ref={testimonialRef} className="bg-white rounded-xl shadow-lg p-8 md:p-10 transition-all duration-500">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <Quote className="w-12 h-12 text-primary opacity-20 mb-4" />
                <p className="text-lg md:text-xl italic mb-6">"{testimonials[currentIndex].quote}"</p>
                <div>
                  <p className="font-bold">{testimonials[currentIndex].author}</p>
                  <p className="text-gray-600">{testimonials[currentIndex].position}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary scale-125" : "bg-gray-300"
                  }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
