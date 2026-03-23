"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">Go Business</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="#servicios" className="font-medium hover:text-primary transition-colors">
            Servicios
          </Link>
          <Link href="#como-funciona" className="font-medium hover:text-primary transition-colors">
            Cómo Funciona
          </Link>
          <Link href="#beneficios" className="font-medium hover:text-primary transition-colors">
            Beneficios
          </Link>
          <Link href="#testimonios" className="font-medium hover:text-primary transition-colors">
            Testimonios
          </Link>
          <Link href="#contacto" className="font-medium hover:text-primary transition-colors">
            Contacto
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link
              href="#servicios"
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="#como-funciona"
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Cómo Funciona
            </Link>
            <Link
              href="#beneficios"
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Beneficios
            </Link>
            <Link
              href="#testimonios"
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonios
            </Link>
            <Link
              href="#contacto"
              className="font-medium hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
