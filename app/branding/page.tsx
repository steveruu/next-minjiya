export default function BrandingPage() {
    return (
        <div className="flex flex-col h-screen justify-center items-center gap-20 bg-[#1e1e1e] w-screen">
            <figure className="w-[640px] ">
                { /* tady bych <img> -> <Image> nedělal, aby nepadala kvalita konečné tapety */}
                <img src="/images/AtlasMinjiya.png" alt="branding" className="rounded-3xl" />
            </figure>
            <figure className="w-[640px]">
                <img src="/images/AtlasMinjiyaFull.png" alt="branding" className="rounded-3xl" />
            </figure>
        </div>
    )
}