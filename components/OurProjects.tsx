import Card from "@/components/Card";

import stihni from "@/public/images/stihnito.png";
import millers from "@/public/images/millers.png";
import drinkapp from "@/public/images/drinkapp.png";
import unknown from "@/public/images/unknown.png";

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
                {/* <Card
                    title="???"
                    description="*&^%$#@!~`+=-_:;<>?{}[]()|\\/.,><!@#$%^&*()_+{}|:<>?[];',./`~!@#$%^&*()_+|}{:?><~`!@#$%^&*()_+|}{:?><~`"
                    image={unknown}
                    link={null}
                    unknown
                /> */}
                <Card
                    title="Stihni.to"
                    description="Mobilní aplikace pro sledování spojů MHD v Liberci. Vyvinuta pomocí React Native a Expo s důrazem na přesnost a real-time."
                    image={stihni}
                    link="./stihni-to"
                    unknown={false}
                />
                <Card
                    title="DrinkApp"
                    description="Aplikace pro Android a iOS zaměřená na sledování pitného režimu. Vyvinuta na platformách Expo a React Native."
                    image={drinkapp}
                    link={"./drinkapp"}
                    unknown={false}
                />
                <Card
                    title="Millers Oils"
                    description="Online e-shop specializující se na prodej olejů a maziv, postavený na technologiích React a Next.js. Aktuálně ve fázi vývoje."
                    image={millers}
                    link={null}
                    unknown={false}
                />
            </div>
        </div>
    );
}
