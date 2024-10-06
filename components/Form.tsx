const Form = () => {
    return (
        <>
            <form >
                <div className="flex flex-col gap-4 pt-8 font-rubik ">
                    <input
                        type="text"
                        placeholder="Jméno"
                        className="p-2 border-2 border-gray-300 rounded-md"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-2 border-2 border-gray-300 rounded-md"
                        required
                    />
                    <textarea
                        placeholder="Zpráva"
                        className="p-2 border-2 border-gray-300 rounded-md max-h-72"
                        required
                    />
                    <button
                        type="submit"
                        className="p-2 border-purpur border-2 text-purpur rounded-md font-semibold "
                    >
                        Odeslat
                    </button>
                </div>
            </form>
        </>
    )
}

export default Form
