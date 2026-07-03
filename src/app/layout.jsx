import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";

export const metadata = {
  title: "Milianny Cova | Desenvolvedora",
  description: "Portfólio profissional de Milianny Cova - Desenvolvedora Front-end especializada em criar experiências web modernas e responsivas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
