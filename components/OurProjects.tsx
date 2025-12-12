import Card from "@/components/Card";
import stihej from "@/public/images/stihej.png";
import citadel from "@/public/images/citadel.png";
import drinkapp from "@/public/images/drinkapp.png";
import studybuddy from "@/public/images/studybuddy.png";

export default function OurProjects() {
    return (
        <div className="w-full">
            <p
                id="projects"
                className="pt-10 text-center text-3xl font-bold font-rubik text-minjiya tracking-tight"
            >
                Naše projekty
            </p>
            <div className="flex flex-row flex-wrap gap-4 mt-10 mb-10 justify-center items-center max-w-[80%] mx-auto">
                <Card
                    title="StudyBuddy"
                    description="Tvůj AI parťák pro přežití školy. Inteligentní asistent, který ti pomůže s učením, organizací a duševním zdravím."
                    image={studybuddy}
                    link={"./studybuddy"}
                    unknown={false}
                />
                <Card
                    title="Stíhej!"
                    description="Mobilní aplikace pro sledování spojů MHD v Liberci. Vyvinuta pomocí React Native a Expo s důrazem na přesnost a real-time."
                    image={stihej}
                    link="./stihej"
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
                    title="citadel"
                    description="Aplikace pro Android a iOS zaměřená na stoickou praxi. Postavená na React Native a Expu."
                    image={citadel}
                    link={"./citadel"}
                    unknown={false}
                />

            </div>
        </div>
    );
}
