import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0c274c] text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image src="/logo.png" alt="Latorre y Palma" width={44} height={44} className="rounded-full" />
              <div>
                <span className="text-lg font-bold font-display block leading-tight">Latorre y Palma</span>
                <span className="text-xs text-[#eab530] uppercase tracking-wider">Corredores de Seguros</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Más de 15 años de experiencia protegiendo a familias y empresas con asesoría profesional en seguros.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5 text-[#eab530] font-display">Nuestros Seguros</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#seguros-vida" className="text-gray-400 hover:text-[#eab530] transition-colors text-sm">
                  Seguros de Vida
                </Link>
              </li>
              <li>
                <Link href="#seguros-generales" className="text-gray-400 hover:text-[#eab530] transition-colors text-sm">
                  Seguros Generales
                </Link>
              </li>
              <li>
                <Link href="#seguros-salud" className="text-gray-400 hover:text-[#eab530] transition-colors text-sm">
                  Seguros Complementarios de Salud
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5 text-[#eab530] font-display">Navegación</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#inicio" className="text-gray-400 hover:text-[#eab530] transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-gray-400 hover:text-[#eab530] transition-colors text-sm">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 hover:text-[#eab530] transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold mb-5 text-[#eab530] font-display">Contacto</h4>
            <address className="not-italic space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#eab530] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">San Pedro de la Paz, Concepción, Chile</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#eab530] mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>(+56 9) 90161539</p>
                  <p>(+56 9) 32418771</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#eab530] mt-0.5 flex-shrink-0" />
                <div className="text-gray-400 text-sm">
                  <p>rpalma@lypcorredores.cl</p>
                  <p>npalma@lypcorredores.cl</p>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Latorre y Palma — Corredores de Seguros. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
