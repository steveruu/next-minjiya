import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "StudyBuddy | Tvůj AI parťák pro přežití školy",
    description:
        "Zapomeň na chaos v Teams, ztracené zápisky a noční úzkosti před písemkou. StudyBuddy je inteligentní AI vrstva mezi tebou a školním systémem.",
    keywords: [
        "studybuddy",
        "ai tutor",
        "student helper",
        "učení",
        "studium",
        "škola",
        "umělá inteligence",
        "rag",
        "duševní zdraví",
        "zen",
    ],
    openGraph: {
        type: "website",
        title: "StudyBuddy | Tvůj AI parťák pro přežití školy",
        description:
            "Zapomeň na chaos v Teams, ztracené zápisky a noční úzkosti. StudyBuddy je inteligentní AI vrstva mezi tebou a školním systémem.",
        locale: "cs_CZ",
    },
};


export default function StudyBuddyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
