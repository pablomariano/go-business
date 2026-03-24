"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#seguros-vida", label: "Seguros de Vida" },
  { href: "#seguros-generales", label: "Seguros Generales" },
  { href: "#seguros-salud", label: "Seguros de Salud" },
  { href: "#contacto", label: "Contacto" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-[#143f7a]/90 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="#inicio" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Latorre y Palma" width={48} height={48} className="rounded-full" />
          <div className="hidden sm:block">
            <span className={`text-lg font-bold font-display leading-tight block ${scrolled ? "text-[#143f7a]" : "text-white"}`}>
              Latorre y Palma
            </span>
            <span className={`text-xs tracking-wider uppercase ${scrolled ? "text-[#5e5d5d]" : "text-[#eab530]"}`}>
              Corredores de Seguros
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-300 hover:text-[#eab530] ${
                scrolled ? "text-[#143f7a]" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+56990161539"
            className="flex items-center gap-2 btn-accent text-sm !py-2.5 !px-5 rounded-full"
          >
            <Phone size={14} />
            Llámanos
          </a>
        </div>

        <button
          className={`lg:hidden ${scrolled ? "text-[#143f7a]" : "text-white"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-xl border-t border-gray-100">
          <div className="container-custom py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#143f7a] font-medium hover:text-[#eab530] transition-colors py-1"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+56990161539"
              className="flex items-center gap-2 btn-accent text-sm !py-2.5 justify-center rounded-full mt-2"
            >
              <Phone size={14} />
              (+56 9) 90161539
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
