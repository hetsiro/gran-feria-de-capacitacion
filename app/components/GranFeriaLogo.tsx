import Image from "next/image";

export default function GranFeriaLogo() {
  return (
    <div className="w-fit hover:brightness-110 hover:drop-shadow-xl/25 transition-all duration-300 cursor-pointer scroll-fade-in-down">
      <div className="flex justify-center items-center bg-primary w-25 md:w-40 h-30 md:h-40 ">
        <Image
          src="/images/webp/gran-feria-logo.webp"
          alt="Gran Feria Logo"
          width={100}
          height={100}
          className="hidden md:block"
        />
        <Image
          src="/images/webp/gran-feria-logo.webp"
          alt="Gran Feria Logo"
          width={75}
          height={75}
          className="block md:hidden"
        />
      </div>
      <div className="w-25 md:w-40 h-10 absolute bg-primary clip-reverse-triangle" />
    </div>
  );
}
