"use client";

import FormularioInscripcion from "./FormularioInscripcion";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { AlfaSlabOne } from "../fonts";
import Novedades from "./Novedades";
import Info from "./Info";
import Colaboradores from "./Colaboradores";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 w-7xl mx-auto py-8 my-8">
      <h1
        className={`flex items-center justify-center gap-3 text-3xl text-center text-black ${AlfaSlabOne.className} bg-primary/75 px-8 py-4 rounded-full z-10`}
      >
        <Image src="/icons/worker.svg" alt="Worker" width={40} height={40} />
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              //   .typeString("Gran Feria de capacitación")
              .typeString(
                "GRAN FERIA DE CAPACITACIÓN <img src='/icons/tools.svg' alt='Tools' style='display: inline-block; width: 40px; height: 40px; vertical-align: text-bottom;' />"
              )
              .pauseFor(2500)
              .deleteAll()
              //   .typeString("Para especialistas en construcción")
              .typeString(
                "PARA ESPECIALISTAS EN CONSTRUCCIÓN <img src='/icons/worker-insurance.svg' alt='Worker Insurance' style='display: inline-block; width: 40px; height: 40px; vertical-align: text-bottom;' />"
              )
              .pauseFor(2500)
              .deleteAll()
              .start();
          }}
          options={{
            loop: true,
            delay: 80,
          }}
        />
      </h1>
      <section className="relative overflow-hidden flex flex-col items-center justify-center gap-10 px-16 pt-16 pb-60 rounded-2xl bg-white">
        <div className="absolute w-full h-full bg-primary bottom-0 clip-triangle-right" />
        <div className="grid grid-cols-2 gap-6 z-10">
          <Image
            src="/images/webp/bg-form-3.webp"
            alt="Formulario de Inscripción"
            width={1936}
            height={999}
          />
          <FormularioInscripcion />
        </div>
      </section>
      <Info />
      <Novedades />
      <Colaboradores />
    </section>
  );
}
