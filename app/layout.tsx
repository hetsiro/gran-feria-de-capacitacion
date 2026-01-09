import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
  title: "Gran Feria de Capacitación",
  description: "Gran Feria de Capacitación",
  themeColor: "#f6db00",
  other: {
    "color-scheme": "light",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" style={{ colorScheme: 'light' }}>
      <body
        className={`flex flex-col min-h-screen antialiased`}
      >
        <Header />
        <main className="flex-1 bg-gray-100">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
