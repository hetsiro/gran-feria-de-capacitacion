import Image from "next/image";
import Card from "../components/Card";

export default function Info() {
  const info = [
    {
      title: "Capacitaciónes",
      description:
        "Descubre las últimas capacitaciones disponibles para tu crecimiento profesional. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: (
        <Image
          src="/icons/training.svg"
          alt="training"
          width={60}
          height={60}
        />
      ),
    },
    {
      title: "Expositores",
      description:
        "Conoce a nuestros expositores y aprende de sus experiencias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: (
        <Image
          src="/icons/exhibitors.svg"
          alt="exhibitors"
          width={60}
          height={60}
        />
      ),
    },
    {
      title: "Tecnología e Innovación",
      description:
        "Descubre las últimas tecnologías y innovaciones en el sector de la construcción. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      image: (
        <Image
          src="/icons/innovation.svg"
          alt="technology"
          width={60}
          height={60}
        />
      ),
    },
  ];
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-8 w-full md:max-w-4xl p-2 md:p-0 md:-mt-60 z-10">
      {info.map((info) => (
        <Card
          key={info.title}
          title={info.title}
          description={info.description}
          image={info.image}
        />
      ))}
    </div>
  );
}
