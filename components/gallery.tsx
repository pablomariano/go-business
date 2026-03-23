"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"

const galleryImages = [
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Bodega y logística",
    caption: "Nuestras instalaciones de almacenamiento y distribución",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Abastecimiento y suministro",
    caption: "Gestión eficiente de la cadena de suministro",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Personal especializado",
    caption: "Equipo profesional altamente capacitado",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Servicios generales",
    caption: "Soluciones integrales para tu empresa",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Clientes satisfechos",
    caption: "Trabajando con las principales empresas del sector",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Tecnología avanzada",
    caption: "Utilizamos tecnología de punta en nuestros procesos",
  },
]

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<(HTMLDivElement | null)[]>([])

  const nextImage = () => {
    setLightboxImage((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setLightboxImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const openLightbox = (index: number) => {
    setLightboxImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto"
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

    imagesRef.current.forEach((img) => {
      if (img) observer.observe(img)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return

      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [lightboxOpen])

  return (
    <section id="galeria" className="section-padding bg-white">
      <div ref={sectionRef} className="container-custom opacity-0 translate-y-10 transition-all duration-700">
        <div className="text-center mb-16">
          <h2 className="mb-4">Galería</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Conoce nuestras instalaciones, equipo y proyectos a través de nuestra galería de imágenes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
              className="opacity-0 translate-y-10 transition-all duration-700 group cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md h-64">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white w-10 h-10" />
                </div>
              </div>
              <p className="mt-3 text-center text-gray-700 font-medium">{image.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={closeLightbox}>
          <div
            className="relative max-w-5xl w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                prevImage()
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="relative max-h-[80vh] max-w-full">
              <img
                src={galleryImages[lightboxImage].src || "/placeholder.svg"}
                alt={galleryImages[lightboxImage].alt}
                className="max-h-[80vh] max-w-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">
                {galleryImages[lightboxImage].caption}
              </div>
            </div>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                nextImage()
              }}
            >
              <ChevronRight size={24} />
            </button>

            <button className="absolute top-4 right-4 text-white text-2xl font-bold" onClick={closeLightbox}>
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
