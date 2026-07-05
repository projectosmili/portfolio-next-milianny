import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { Inter } from "next/font/google";
import ParticlesBackground from "../components/ParticlesBackground";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Milianny Cova | Desenvolvedora",
  description: "Portfólio profissional de Milianny Cova - Desenvolvedora Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ParticlesBackground />
        {children}
      </body>
    </html>
  );
}