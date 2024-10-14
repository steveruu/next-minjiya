import { MdDoNotDisturbAlt } from "react-icons/md";
import Image from "next/image";

export default function Card({
    title,
    description,
    image,
    link,
}: {
    title: string;
    description: string;
    image: string;
    link: string | null;
}) {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div>
                <Image
                    className="rounded-t-lg"
                    src={image}
                    alt={title}
                    loading="lazy"
                />
            </div>
            <div className="p-5">
                <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                        {title}
                    </h5>
                </div>
                <p className="mb-3 font-normal text-gray-70 font-rubik">
                    {description}
                </p>
                {link ? (
                    <a
                        href={link}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-purpur rounded-lg focus:bg-purple-900"
                    >
                        Přejít na stránku
                        <svg
                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                ) : (
                    <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-300 rounded-lg cursor-not-allowed ">
                        Web stále ve vývoji{" "}
                        {<MdDoNotDisturbAlt className="ms-1" />}
                    </a>
                )}
            </div>
        </div>
    );
}
