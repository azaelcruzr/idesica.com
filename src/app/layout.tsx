import "@/styles/globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className={`${robotoMono.className} flex flex-col min-h-screen`}>
        <Navbar />
        {/* El contenido de cada página */}
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
