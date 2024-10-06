"use client"
import { formHandle } from "@/lib/route"
import { useFormState } from 'react-dom';
import { toast, Toaster } from "react-hot-toast";

const Form = () => {
    const [state, formAction] = useFormState(
        (prevState: any, formData: FormData) => formHandle(prevState, formData),
        { status: 418, message: "🫖" }
    );

    if (state.status === 200) {
        toast.success(state.message);
    } else if (state.status == 400 || state.status == 429) {
        toast.error(state.message);
    }

    return (
        <>
            <Toaster position="bottom-center" />
            <form action={formAction}>
                <div className="flex flex-col gap-4 pt-8 font-rubik ">
                    <input
                        type="text"
                        id="userFirstName"
                        name="userFirstName"
                        placeholder="Jméno"
                        className="p-2 border-2 border-gray-300 rounded-md"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        className="p-2 border-2 border-gray-300 rounded-md"
                        required
                    />
                    <textarea
                        placeholder="Zpráva"
                        className="p-2 border-2 border-gray-300 rounded-md max-h-72"
                        required
                        id="text"
                        name="text"
                    />
                    <button
                        type="submit"
                        className="p-2 border-purpur border-2 text-purpur rounded-md font-semibold "
                    >
                        Odeslat PŘIDAT RECAPTCHA TODO
                    </button>
                </div >
            </form >
        </>
    )
}

export default Form
