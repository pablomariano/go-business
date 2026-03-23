"use client"

import { useEffect, useRef } from "react"

const clients = [
  {
    name: "Minera Andina",
    logo: "/placeholder.svg?height=100&width=200",
    industry: "Minería",
  },
  {
    name: "TechSolutions",
    logo: "/placeholder.svg?height=100&width=200",
    industry: "Tecnología",
  },
  {
    name: "Energía Global",
    logo: "/placeholder.svg?height=100&width=200",
    industry: "Energía",
  },
  {
    name: "Banco Comercial",
    logo: "/placeholder.svg?height=100&width=200",
    industry: "Banca",
  },
  {
    name: "Exportadora del Sur",
    logo: "/placeholder.svg?height=100&width=200",
    industry: "Comercio Exterior",
  },
  {
    name: "Agrícola Nacional",
    logo: "/placeholder.svg?height=100&width=200",
    industry: "Agricultura",
  },
]

export default function Clients() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const clientsRef = useRef<(HTMLDivElement | null)[]>([])

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

    clientsRef.current.forEach((client) => {
      if (client) observer.observe(client)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section className="py-16 bg-gray-50">
      <div ref={sectionRef} className="container-custom opacity-0 translate-y-10 transition-all duration-700">
        <div className="text-center mb-16">
          <h2 className="mb-4">Nuestros Clientes</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Empresas líderes en diversos sectores confían en Go Business para sus soluciones empresariales.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              ref={(el) => (clientsRef.current[index] = el)}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center opacity-0 translate-y-10 transition-all duration-500 hover:shadow-lg"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <img src={client.logo || "/placeholder.svg"} alt={client.name} className="h-12 object-contain mb-4" />
              <p className="font-medium text-center">{client.name}</p>
              <p className="text-sm text-gray-500 text-center">{client.industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
