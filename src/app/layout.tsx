import "@/styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pesos que necesites
});

export const metadata: Metadata = {
  title: "IDESICA | Innovación que conecta",
  description: "Página corporativa de IDESICA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={robotoMono.className}>
        <Navbar />
        <Hero />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
