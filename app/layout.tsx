import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "Gran Feria de Capacitación",
  description: "Gran Feria de Capacitación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`flex flex-col min-h-screen antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
