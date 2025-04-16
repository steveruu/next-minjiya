import { MdDoNotDisturbAlt } from "react-icons/md";
import Image, { StaticImageData } from "next/image";

export default function Card({
    title,
    description,
    image,
    link,
    unknown
}: {
    title: string;
    description: string;
    image: StaticImageData;
    link: string | null;
    unknown: boolean | null
}) {
    return (
        <div className={`max-w-sm bg-white border border-gray-200 rounded-t-md shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 overflow-hidden`}>
            <div className="relative overflow-hidden">
                <Image
                    className="rounded-t-md"
                    src={image}
                    alt={title}
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5" />
            </div>
            <div className="p-6">
                <div>
                    <h5 className={`mb-3 text-2xl font-bold tracking-tight text-minjiya font-rubik`}>
                        {title}
                    </h5>
                </div>
                <p className={`mb-5 font-normal text-minjiya font-rubik leading-relaxed`}>
                    {description}
                </p>
                {link ? (
                    <a
                        href={link}
                        className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-white bg-minjiya rounded-lg hover:bg-minjiya/80 transition-all duration-300 focus:ring-4 focus:ring-minjiya/20 shadow-sm hover:shadow-md"
                    >
                        Přejít na stránku
                        <svg
                            className="rtl:rotate-180 w-4 h-4 ms-2 transition-transform duration-200 group-hover:translate-x-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                ) : (
                    <a className={`inline-flex items-center px-4 py-2.5 text-sm font-medium text-white ${unknown ? 'bg-[#0D3510]' : 'bg-gray-300'} rounded-lg cursor-not-allowed transition-all duration-300 shadow-sm`}>
                        Stále ve vývoji
                        <MdDoNotDisturbAlt className="ms-2 text-lg" />
                    </a>
                )}
            </div>
        </div>
    );
}
