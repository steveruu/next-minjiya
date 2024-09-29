export default function Card({
    title,
    description,
    image,
}: {
    title: string;
    description: string;
    image: string;
}) {
    return (
        <div className="flex flex-col items-center mt-10">
            <h3 className="text-2xl font-semibold font-rubik">{title}</h3>
            <p className="text-neutral-500 text-center">{description}</p>
        </div>
    );
}
