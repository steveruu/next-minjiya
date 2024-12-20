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
            <Toaster
                position="bottom-center"
                toastOptions={{
                    className: 'font-rubik',
                    duration: 3000,
                    style: {
                        background: '#1a1a1a',
                        color: '#fff',
                        border: '1px solid #333',
                    },
                }}
            />
            <form action={formAction} ref={formRef} id="form" className="max-w-md mx-auto mt-8">
                <div className="flex flex-col gap-6 font-rubik">
                    <div className="relative">
                        <input
                            type="text"
                            id="userFirstName"
                            name="userFirstName"
                            placeholder={czech ? "Jméno" : "Name"}
                            className="w-full p-4 bg-neutral-800/50 border border-neutral-700 rounded-lg 
                            focus:border-purpur focus:ring-2 focus:ring-purple-900/50 outline-none 
                            transition-all duration-300 placeholder:text-neutral-500 text-white"
                            required
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="w-full p-4 bg-neutral-800/50 border border-neutral-700 rounded-lg 
                            focus:border-purpur focus:ring-2 focus:ring-purple-900/50 outline-none 
                            transition-all duration-300 placeholder:text-neutral-500 text-white"
                            required
                        />
                    </div>
                    <div className="relative">
                        <textarea
                            placeholder={czech ? "Vaše zpráva" : "Your message"}
                            className="w-full p-4 bg-neutral-800/50 border border-neutral-700 rounded-lg 
                            focus:border-purpur focus:ring-2 focus:ring-purple-900/50 outline-none 
                            transition-all duration-300 min-h-[150px] placeholder:text-neutral-500 
                            text-white resize-none"
                            required
                            id="text"
                            name="text"
                        />
                    </div>
                    <div className="flex justify-center">
                        <ReCAPTCHA
                            theme="dark"
                            sitekey="6LcNXCcUAAAAAOsIMLoSI8IvJFc3z0iyiiCIEMuj"
                            ref={recaptchaRef}
                            onChange={handleCaptchaSubmission}
                            onExpired={() => { setIsVerified(false); }}
                        />
                    </div>
                    <button
                        type="submit"
                        className="p-4 bg-purpur text-white rounded-lg font-semibold 
                        disabled:bg-neutral-700 disabled:text-neutral-400 
                        hover:bg-purple-700 transform hover:-translate-y-1 
                        hover:shadow-lg hover:shadow-purple-500/20 
                        transition-all duration-300 
                        disabled:hover:bg-neutral-700 disabled:hover:transform-none 
                        disabled:cursor-not-allowed"
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
