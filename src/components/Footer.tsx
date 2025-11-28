// src/components/Footer.tsx
"use client";

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
} from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-brand-blue text-white px-6 pt-10">
      {/* CONTENEDOR SUPERIOR */}
      <div
        className="
          max-w-7xl mx-auto 
          flex flex-col md:flex-row 
          justify-between 
          items-center md:items-center
          min-h-[180px]
          gap-10
        "
      >
        {/* LOGO - centrado vertical al DIV, no al contacto */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img src="/logoWhite.webp" alt="IDESICA Logo" className="h-14" />
        </div>

        {/* CONTACTO */}
        <div
          className="
            flex flex-col 
            space-y-3 
            text-center md:text-left
            w-full md:w-auto
          "
        >
          <h3 className="font-bold uppercase text-lg">Contacto</h3>

          <p className="flex justify-center md:justify-start items-start space-x-2">
            <HiOutlineLocationMarker className="mt-1 flex-shrink-0" />
            <span>
              Av. Los Cardenales, 0 int L-17
              <br /> M-A Playa de Vaca, Veracruz.
              <br /> CP: 94273
            </span>
          </p>

          <p className="flex justify-center md:justify-start items-center space-x-2">
            <HiOutlineMail />
            <a href="mailto:contacto@idesica.com" className="hover:underline">
              contacto@idesica.com
            </a>
          </p>

          <p className="flex justify-center md:justify-start items-center space-x-2">
            <HiOutlinePhone />
            <a href="tel:+522971021020" className="hover:underline">
              +52 297 102 1020
            </a>
          </p>
        </div>
      </div>

      {/* REDES + COPYRIGHT */}
      <div className="mt-8 flex flex-col items-center space-y-4 pb-6">
        <div className="flex space-x-6 text-2xl">
          <a href="#" aria-label="Facebook" className="hover:text-gray-200">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-gray-200">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-gray-200">
            <FaInstagram />
          </a>
        </div>

        <p className="text-xs text-center">
          © 2025 COPYRIGHT GRUPO IDESICA S.A. DE C.V.
        </p>
      </div>
    </footer>
  );
}
