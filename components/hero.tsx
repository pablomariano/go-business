"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, Heart, Activity } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#143f7a]/95 via-[#143f7a]/85 to-[#0c274c]/95 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1920&q=80"
          alt="Familia protegida"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#eab530]/10 rounded-full blur-3xl z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#eab530]/5 rounded-full blur-3xl z-10"></div>

      <div className="container-custom relative z-20 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className={`inline-flex items-center gap-2 bg-[#eab530]/20 border border-[#eab530]/30 text-[#eab530] px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
            >
              <Shield size={16} />
              Más de 15 años protegiendo a familias
            </div>

            <h1
              className={`mb-6 text-white leading-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
            >
              Asegurar tu vida y la de los tuyos es{" "}
              <span className="text-[#eab530] italic">muy importante</span>
            </h1>

            <p
              className={`text-lg md:text-xl text-gray-200 mb-8 max-w-xl transition-all duration-700 delay-300 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
            >
              Asesoramos a nuestros clientes de manera personalizada, profesional y técnica, respaldados por la
              Superintendencia de Valores y Seguros.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0 translate-y-10"}`}
            >
              <Link href="#contacto" className="btn-accent flex items-center justify-center gap-2 rounded-full">
                Cotiza tu seguro <ArrowRight size={18} />
              </Link>
              <Link
                href="#nosotros"
                className="px-8 py-3.5 rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 font-medium text-center"
              >
                Conócenos
              </Link>
            </div>
          </div>

          <div
            className={`hidden lg:grid grid-cols-2 gap-4 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100" : "opacity-0 translate-x-20"}`}
          >
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                <Heart className="w-10 h-10 text-[#eab530] mb-3" />
                <h3 className="text-white text-lg font-bold mb-1 font-display">Seguros de Vida</h3>
                <p className="text-gray-300 text-sm">Protección y ahorro para tu familia</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                <Shield className="w-10 h-10 text-[#eab530] mb-3" />
                <h3 className="text-white text-lg font-bold mb-1 font-display">Seguros Generales</h3>
                <p className="text-gray-300 text-sm">Incendio, auto, RC y más</p>
              </div>
            </div>
            <div className="pt-8 space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                <Activity className="w-10 h-10 text-[#eab530] mb-3" />
                <h3 className="text-white text-lg font-bold mb-1 font-display">Salud</h3>
                <p className="text-gray-300 text-sm">Seguros complementarios de salud</p>
              </div>
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/logo.png"
                  alt="Latorre y Palma"
                  width={300}
                  height={300}
                  className="w-full h-auto opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-7 h-11 rounded-full border-2 border-white/40 flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-[scrollDown_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  )
}
