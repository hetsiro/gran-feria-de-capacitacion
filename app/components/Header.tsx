import GranFeriaLogo from "./GranFeriaLogo";
import SodimacLogo from "@/app/components/SodimacLogo";
import UbicacionEvento from "./svg/UbicacionEvento";
import FechaEvento from "./svg/FechaEvento";

export default function Header() {
  return (
    <>
      <header className="hidden md:flex justify-center w-full h-35 bg-black">
        <div className="flex justify-around w-7xl h-35 bg-black">
          <GranFeriaLogo />
          {/* <div className="flex items-center justify-center">
                <p className="text-white">
                    <span className={`${aktivGrotesk.className} text-lg`}>CENTRO CULTURAL<br /></span>
                    <span className={`${myriadPro.className} text-3xl font-bold`}>ESTACIÓN<br />MAPOCHO</span>
                </p>
                <p>
                    <span className={`${aktivGrotesk.className} text-lg`}>24 al 26<br /></span>
                </p>
            </div>*/}
          <div className="flex gap-4">
            <UbicacionEvento />
            <FechaEvento />
          </div>

          <SodimacLogo animation="slide-in" />
        </div>
      </header>

      {/* Mobile Header */}
      <header className="block md:hidden w-full bg-black">
        <div className="flex justify-around w-full bg-black">
          <GranFeriaLogo />
          {/* <div className="flex items-center justify-center">
                <p className="text-white">
                    <span className={`${aktivGrotesk.className} text-lg`}>CENTRO CULTURAL<br /></span>
                    <span className={`${myriadPro.className} text-3xl font-bold`}>ESTACIÓN<br />MAPOCHO</span>
                </p>
                <p>
                    <span className={`${aktivGrotesk.className} text-lg`}>24 al 26<br /></span>
                </p>
            </div>*/}
          <div className="flex gap-4">
            <UbicacionEvento />
            <FechaEvento />
          </div>
        </div>
      </header>
    </>
  );
}
