interface QuoteCardProps {
    quote: string;
    author: string;
    authorImage: string;
}

import Image from "next/image";

const QuoteCard: React.FC<QuoteCardProps> = ({ ...props }) => {
    return (
        <div>
            <div className="flex flex-col items-center bg-slate-800 px-6 py-4 border-slate-400 border gap-4 rounded-xl">
                <p className="text-xl font-regular font-rubik text-white">"{props.quote}"</p>
                <div className="flex flex-row items-center w-full justify-start gap-4">
                    <img src={props.authorImage} alt={props.author} className="rounded-full aspect-square object-cover h-[35px]" />
                    <p className="text-neutral-300 text-left font-light flex-grow"> {props.author}</p>
                </div>
            </div>
        </div>
    )
}

export default QuoteCard
