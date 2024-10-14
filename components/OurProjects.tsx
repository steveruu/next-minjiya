import Card from "@/components/Card";

import union from "@/public/images/union.png";
import millers from "@/public/images/millers.png";

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
                    description="Responsivní, jednoduchá stránka pro Minecraft server UnionMC, používající čisté HTML a CSS."
                    image={union}
                    link="https://unionmc.stvr.cz"
                />
                <Card
                    title="Millers Oils"
                    description="Online e-shop pro prodej olejů a maziv, postavený pomocí Reactu a Next.js. V současné době ve vývoji."
                    image={millers}
                    link={null}
                />
                <Card
                    title="DrinkApp"
                    description="Progresivní webová aplikace pro hlídání pitného režimu, mířená především na telefony. Postavená pomocí Reactu."
                    image={union}
                    link={null}
                />

            </div>
        </div>
    );
}
