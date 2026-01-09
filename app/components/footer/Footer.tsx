import SodimacLogo from "@/app/components/SodimacLogo";
import SocialMedia from "./SocialMedia";
import TermsAndConditions from "./TermsAndConditions";

export default function Footer() {
    return (
        <footer className="flex justify-around items-center gap-4 w-full h-35 bg-black">
            <SodimacLogo />
            <section className="flex flex-col gap-2">
                <SocialMedia />
                <TermsAndConditions />
            </section>
        </footer>
    );
}