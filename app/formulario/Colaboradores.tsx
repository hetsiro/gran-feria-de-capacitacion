import Image from "next/image";
import { AlfaSlabOne } from "../fonts";

export default function Colaboradores() {
    return (
        <section className="flex flex-col items-center justify-center gap-10 p-8 rounded-2xl bg-white w-full">
            <h2 className={`text-3xl font-bold tracking-wide text-gray-800 ${AlfaSlabOne.className}`}>COLABORADORES</h2>
            <div className="grid grid-cols-6 gap-4 w-full">
                {Array.from({ length: 12 }).map((_, index) => (
                    <div key={index} className="flex items-center justify-center size-fit p-5 rounded-2xl bg-linear-to-br from-yellow-12 to-primary hover:scale-105 hover:brightness-110 hover:drop-shadow-md/25 transition-all duration-300 cursor-pointer">
                        <Image src="/images/svg/sodimac-logo.svg" alt="Sodimac Logo" width={100} height={100} />
                    </div>
                ))}
            </div>
        </section>
    );
}