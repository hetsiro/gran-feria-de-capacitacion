import Footer from "../components/footer/Footer";
import Header from "../components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-100">{children}</main>
      <Footer />
    </>
  );
}
