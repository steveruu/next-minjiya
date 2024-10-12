import QuoteCard from "@/components/QuoteCard";

export default function OurReferences() {
    return (
        <div className="w-full">
            <p
                id="references"
                className="pt-10 text-center text-3xl font-semibold font-rubik"
            >
                Naše reference
            </p>
            <div className="flex flex-row flex-wrap gap-4 mt-10 mb-10 justify-center items-center max-w-[80%] mx-auto">
                <QuoteCard
                    author="Dollar Prync"
                    quote="Sleduj malá Minjiyo, sleduj teď"
                    authorImage="https://eventigo.s3-central.vshosting.cloud/production/artist/dollar-prync-generace-rap-kopie-jpg-zjekmo.jpeg"
                />
                <QuoteCard
                    author="Sergei Barracuda"
                    quote="Budu v enháčku jak Minjiya chcípat na bolesti zad"
                    authorImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBur3Y-4p-Z407ixxZWIvXa6sh6cRSMKsDG47gYL_PnnEZukeo"
                />
                <QuoteCard
                    author="Dollar Prync"
                    quote="Pojď sem baby, dělej tou Minjiyou teď a tady"
                    authorImage="https://eventigo.s3-central.vshosting.cloud/production/artist/dollar-prync-generace-rap-kopie-jpg-zjekmo.jpeg"
                />
            </div>
        </div>
    )
}