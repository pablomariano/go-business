"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Go Business Hero"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className={`mb-6 text-white transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <span className="text-primary">Transformamos</span> tu negocio con soluciones personalizadas
          </h1>
          <p
            className={`text-xl md:text-2xl text-gray-100 mb-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            Más de tres décadas de experiencia conjunta en diversos sectores, ofreciendo soluciones integrales para
            impulsar tu empresa.
          </p>
          <div
            className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
          >
            <Link href="#contacto" className="btn-primary flex items-center justify-center gap-2">
              Transforma tu negocio <ArrowRight size={18} />
            </Link>
            <Link
              href="#servicios"
              className="px-6 py-3 rounded-md border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 font-medium"
            >
              Conoce nuestros servicios
            </Link>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-[scrollDown_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  )
}
