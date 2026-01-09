import { aktivGrotesk, AlfaSlabOne, BlackAlternate, helvetica, myriadPro } from "@/app/fonts";

export default function TermsAndConditions() {
    return (
        <div className={`${BlackAlternate.className} flex flex-col gap-2 text-primary text-xs text-center`}>
            <p className="cursor-pointer">TÉRMINOS Y CONDICIONES FERIA</p>
            <p className="cursor-pointer">TÉRMINOS Y CONDICIONES SORTEO</p>
        </div>
    );
}