"use client";
import { formHandle } from "@/lib/route";
import { useFormState } from "react-dom";
import { useRef, useState, useEffect } from "react";

import ReCAPTCHA from "react-google-recaptcha";
import { toast, Toaster } from "react-hot-toast";

const Form = ({ czech }: { czech: boolean }) => {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [isVerified, setIsVerified] = useState(false);

    async function handleCaptchaSubmission(token: string | null) {
        try {
            if (token) {
                await fetch("/api", {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token }),
                });
                setIsVerified(true);
            }
        } catch {
            setIsVerified(false);
        }
    }

    const [state, formAction] = useFormState(
        (prevState: { status: number, message: string }, formData: FormData) => {
            formData.append("isVerified", isVerified.toString());
            return formHandle(prevState, formData);
        },
        { status: 418, message: "🫖" }
    );

    useEffect(() => {
        if (state.status === 200) {
            toast.success(state.message);
            formRef.current?.reset();
        } else if (state.status == 400 || state.status == 429) {
            toast.error(state.message);
        }
    }, [state]);

    return (
        <>
            <Toaster position="bottom-center" />
            <form action={formAction} ref={formRef} id="form">
                <div className="flex flex-col gap-4 pt-8 font-rubik ">
                    <input
                        type="text"
                        id="userFirstName"
                        name="userFirstName"
                        placeholder={czech ? "Jméno" : "Name"}
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
                        placeholder={czech ? "Vaše zpráva" : "Your message"}
                        className="p-2 border-2 border-gray-300 rounded-md max-h-72"
                        required
                        id="text"
                        name="text"
                    />
                    <ReCAPTCHA
                        sitekey="6LcNXCcUAAAAAOsIMLoSI8IvJFc3z0iyiiCIEMuj"
                        ref={recaptchaRef}
                        onChange={handleCaptchaSubmission}
                        onExpired={() => { setIsVerified(false); }}
                    />
                    <button
                        type="submit"
                        className="p-2 bg-purpur text-white rounded-md font-semibold disabled:bg-purple-300"
                        disabled={!isVerified}
                    >
                        {czech ? "Odeslat" : "Send"}
                    </button>
                </div>
            </form>
        </>
    );
};

export default Form;
