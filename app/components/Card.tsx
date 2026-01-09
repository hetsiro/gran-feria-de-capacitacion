import { myriadPro } from "../fonts";

export default function Card({
    title,
    description,
    image
  }: {
    title: string;
    description: string;
    image?: React.ReactNode;
  }) {
    return (
      <div className={`${myriadPro.className} max-w-100 flex flex-col items-center gap-4 p-8 rounded-2xl bg-linear-to-br from-primary to-yellow-500 hover:cursor-pointer brightness-100 hover:brightness-110 hover:scale-105 drop-shadow-yellow-300 drop-shadow-lg hover:shadow-lg hover:shadow-yellow-300 transition-all duration-300`}>
        {image}
        <h3 className="text-2xl font-bold text-center">{title}</h3>
        <p className="text-justify">{description}</p>
      </div>
    );
  }