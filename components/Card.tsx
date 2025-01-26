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
        <div className={`max-w-sm ${unknown ? 'bg-[#134E16]' : 'bg-white'} border border-gray-200 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}>
            <div className="relative overflow-hidden">
                <Image
                    className="rounded-t-xl"
                    src={image}
                    alt={title}
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5" />
            </div>
            <div className="p-6">
                <div>
                    <h5 className={`mb-3 text-2xl font-bold tracking-tight ${unknown ? 'text-white' : 'text-gray-900'} font-rubik`}>
                        {title}
                    </h5>
                </div>
                <p className={`mb-5 font-normal ${unknown ? 'text-white/90' : 'text-gray-600'} font-rubik leading-relaxed`}>
                    {description}
                </p>
                {link ? (
                    <a
                        href={link}
                        className="inline-flex items-center px-4 py-2.5 text-sm font-medium text-white bg-purpur rounded-lg hover:bg-purple-700 transition-all duration-300 focus:ring-4 focus:ring-purple-200 shadow-sm hover:shadow-md"
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
