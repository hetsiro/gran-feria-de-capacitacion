import Image from "next/image";

export default function GranFeriaLogo() {
  return (
    <div className="w-fit hover:scale-105 hover:brightness-110 hover:drop-shadow-xl/50 transition-all duration-300 cursor-pointer scroll-fade-in-down">
      <div className="flex justify-center items-center bg-primary w-40 h-40 ">
        <Image
          src="/images/webp/gran-feria-logo.webp"
          alt="Gran Feria Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="w-40 h-10 bg-primary clip-reverse-triangle" />
    </div>
  );
}
