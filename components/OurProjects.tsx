import Card from "@/components/Card";

import union from "@/public/images/union.png";
import millers from "@/public/images/millers.png";
import drinkapp from "@/public/images/drinkapp.png";

export default function OurProjects() {
    return (
        <div className="w-full">
            <p
                id="projects"
                className="pt-10 text-center text-3xl font-semibold font-rubik"
            >
                Naše projekty
            </p>
            <div className="flex flex-row flex-wrap gap-4 mt-10 mb-10 justify-center items-center max-w-[80%] mx-auto">
                <Card
                    title="UnionMC"
                    description="Responsivní, minimalistická webová stránka pro UnionMC, vytvořená pomocí čistého HTML a CSS."
                    image={union}
                    link="https://unionmc.stvr.cz"
                />
                <Card
                    title="Millers Oils"
                    description="Online e-shop specializující se na prodej olejů a maziv, postavený na technologiích React a Next.js. Aktuálně ve fázi vývoje."
                    image={millers}
                    link={null}
                />
                <Card
                    title="Drink App"
                    description="Progresivní webová aplikace zaměřená na sledování pitného režimu, optimalizovaná pro mobilní zařízení. Vyvinuta na platformě React."
                    image={drinkapp}
                    link={null}
                />

            </div>
        </div>
    );
}
