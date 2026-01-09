import Image from "next/image";

export default function SodimacLogo({ animation }: { animation?: string }) {
  return (
    <>
      <div className="hidden md:flex items-center justify-center bg-primary size-fit p-5 rounded-2xl my-auto">
        <Image
          src="/images/svg/sodimac-logo.svg"
          alt="Sodimac Logo"
          width={60}
          height={60}
          className={`hover:scale-105 hover:brightness-110 hover:drop-shadow-md/75 transition-all duration-300 cursor-pointer ${animation}`}
        />
      </div>
      <div className="flex md:hidden items-center justify-center bg-primary size-fit p-3 rounded-xl my-auto">
        <Image
          src="/images/svg/sodimac-logo.svg"
          alt="Sodimac Logo"
          width={30}
          height={30}
          className={`hover:scale-105 hover:brightness-110 hover:drop-shadow-md/75 transition-all duration-300 cursor-pointer ${animation}`}
        />
      </div>
    </>
  );
}
