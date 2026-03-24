"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitSuccess(false), 5000)
    }, 1500)
  }

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

    ;[sectionRef, formRef, infoRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contacto" className="section-padding bg-gray-50">
      <div ref={sectionRef} className="container-custom scroll-reveal">
        <div className="text-center mb-16">
          <span className="inline-block text-[#eab530] font-semibold text-sm uppercase tracking-widest mb-3">Hablemos</span>
          <h2 className="mb-4 text-[#143f7a]">Contáctanos</h2>
          <p className="max-w-2xl mx-auto text-[#5e5d5d] text-lg">
            Estamos esperando sus comentarios. Escríbanos y le responderemos a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div ref={infoRef} className="lg:col-span-2 scroll-reveal-left">
            <div className="bg-[#143f7a] rounded-2xl p-8 h-full text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#eab530]/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#eab530]/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-8 font-display">Información de Contacto</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#eab530]/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[#eab530]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-[#eab530]">Dirección</h4>
                      <p className="text-gray-300 text-sm">San Pedro de la Paz, Concepción, Chile</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#eab530]/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[#eab530]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-[#eab530]">Teléfonos</h4>
                      <p className="text-gray-300 text-sm">(+56 9) 90161539</p>
                      <p className="text-gray-300 text-sm">(+56 9) 32418771</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#eab530]/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[#eab530]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1 text-[#eab530]">Correos</h4>
                      <p className="text-gray-300 text-sm">rpalma@lypcorredores.cl</p>
                      <p className="text-gray-300 text-sm">npalma@lypcorredores.cl</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <h4 className="font-medium mb-3 text-[#eab530]">Horario de atención</h4>
                  <p className="text-gray-300 text-sm mb-1">Lunes a Viernes: 9:00 - 18:00</p>
                  <p className="text-gray-300 text-sm">Sábado: 9:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="lg:col-span-3 scroll-reveal-right">
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold mb-6 text-[#143f7a] font-display">Escríbanos</h3>

              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 font-medium text-sm text-[#5e5d5d]">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#143f7a]/30 focus:border-[#143f7a] transition-all"
                  placeholder="Su nombre"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 font-medium text-sm text-[#5e5d5d]">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#143f7a]/30 focus:border-[#143f7a] transition-all"
                  placeholder="su@correo.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium text-sm text-[#5e5d5d]">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#143f7a]/30 focus:border-[#143f7a] transition-all resize-none"
                  placeholder="¿En qué podemos ayudarle?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 rounded-xl"
              >
                <Send size={16} />
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>

              {submitSuccess && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-xl border border-green-200 text-sm">
                  ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
