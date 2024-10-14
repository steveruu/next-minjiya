import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex justify-center items-center min-h-screen flex-col bg-minjiya overflow-x-hidden">
            <h1 className="text-5xl font-rubik mb-2 font-semibold text-white">404</h1>
            <code className="text-2xl text-white font-rubik text-center">
                Stránka nebyla nalezena.{" "}
                <Link href="/" className="underline">Vraťte se domů.</Link>

            </code>
        </div>
    )
}