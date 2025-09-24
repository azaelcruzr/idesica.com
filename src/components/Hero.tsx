// src/components/Hero.tsx
"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen md:h-screen flex justify-center text-center text-brand-white px-4 py-8">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/brazorobot.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Contenido */}
      <div className="mt-20 sm:mt-32 xl:mt-40 relative z-10 max-w-6xl flex flex-col items-center w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight md:leading-snug lg:leading-normal text-center max-w-md sm:max-w-3xl">
          Innovación que conecta, <br className="hidden sm:block" /> soluciones
          que impulsan.
        </h1>

        {/* Soluciones */}
        <div className="mt-12 sm:mt-18 xl:mt-40 grid grid-cols-1 xl:grid-cols-3 gap-16 sm:gap-20 w-full">
          {/* Solución 1 */}
          <div className="flex flex-col xl:flex-row items-center justify-center space-y-2 md:space-y-2 md:space-x-4">
            <div className="bg-brand-blue p-3 shadow-lg flex-shrink-0">
              <Image
                src="/icons/Automatizacion.webp"
                alt="Automatización"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
            <p className="font-bold uppercase text-lg sm:text-xl md:text-2xl tracking-wide">
              Automatización
            </p>
          </div>

          {/* Solución 2 */}
          <div className="flex flex-col xl:flex-row items-center justify-center space-y-2 md:space-y-2 md:space-x-4">
            <div className="bg-brand-blue p-3 shadow-lg flex-shrink-0">
              <Image
                src="/icons/Instrumentacion.webp"
                alt="Instrumentación"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
            <p className="font-bold uppercase text-lg sm:text-xl md:text-2xl tracking-wide">
              Instrumentación
            </p>
          </div>

          {/* Solución 3 */}
          <div className="flex flex-col xl:flex-row items-center justify-center space-y-2 md:space-y-2 md:space-x-4">
            <div className="bg-brand-blue p-3 shadow-lg flex-shrink-0">
              <Image
                src="/icons/telemetria.webp"
                alt="Telemetría"
                width={80}
                height={80}
                className="w-16 h-16 md:w-20 md:h-20"
              />
            </div>
            <p className="font-bold uppercase text-lg sm:text-xl md:text-2xl tracking-wide">
              Telemetría
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
