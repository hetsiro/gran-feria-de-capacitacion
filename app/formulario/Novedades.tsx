import CardLight from "../components/CardLight";
import { AlfaSlabOne } from "../fonts";

export default function Novedades() {
    const novedades = [
        {
            title: "Capacitaciónes",
            description: "Descubre las últimas capacitaciones disponibles para tu crecimiento profesional. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        },
        {
            title: "Sorteos",
            description: "Participa en nuestros sorteos y gana premios exclusivos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        },
        {
            title: "Premios",
            description: "Descubre los premios que puedes ganar en nuestras actividades. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
        },
    ];
    return (
        <section className="flex flex-col items-center justify-center gap-10 p-8 rounded-2xl bg-white w-full">
            <h2 className={`text-3xl font-bold tracking-wide text-gray-800 ${AlfaSlabOne.className}`}>NOVEDADES</h2>
            <div className="grid grid-cols-3 gap-4 w-full">
                {novedades.map((novedad) => (
                    <CardLight key={novedad.title} title={novedad.title} description={novedad.description} />
                ))}
            </div>
        </section>
    );
}