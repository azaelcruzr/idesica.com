// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "INICIO", href: "/" },
    { name: "NOSOTROS", href: "/nosotros" },
    { name: "SOLUCIONES", href: "/soluciones" },
    { name: "CONTACTO", href: "/contacto" },
  ];

  return (
    <nav className="bg-brand-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/logo.webp"
                alt="IDESICA Logo"
                width={140}
                height={60}
                priority
              />
            </Link>
          </div>

          {/* Links - Desktop */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-brand-dreams hover:text-brand-blue font-semibold tracking-wide transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Botón móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-8 h-8 flex items-center justify-center focus:outline-none"
            >
              <span
                className={`absolute h-1 w-8 bg-brand-dreams rounded transition-all duration-300 ${
                  isOpen ? "rotate-45" : "-translate-y-2"
                }`}
              ></span>
              <span
                className={`absolute h-1 w-8 bg-brand-dreams rounded transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`absolute h-1 w-8 bg-brand-dreams rounded transition-all duration-300 ${
                  isOpen ? "-rotate-45" : "translate-y-2"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-brand-blue text-brand-white shadow-lg transform transition-all duration-500 overflow-hidden ${
          isOpen ? "h-[50vh] opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-2xl font-semibold uppercase tracking-wide py-6">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:text-gray-200 transform transition-all duration-500 ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-3"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
