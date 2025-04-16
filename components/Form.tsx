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
                        border: '1px solid rgba(255,255,255,0.1)',
                    },
                }}
            />
            <form action={formAction} ref={formRef} id="form" className="max-w-md mx-auto mt-8">
                <div className="flex flex-col gap-4 font-rubik">
                    <div className="relative">
                        <input
                            type="text"
                            id="userFirstName"
                            name="userFirstName"
                            placeholder={czech ? "Jméno" : "Name"}
                            className="w-full p-4 bg-white/10 border border-white/20 rounded-lg 
                            focus:border-white/40 focus:ring-2 focus:ring-white/10 outline-none 
                            transition-all duration-300 placeholder:text-white/50 text-white"
                            required
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="w-full p-4 bg-white/10 border border-white/20 rounded-lg 
                            focus:border-white/40 focus:ring-2 focus:ring-white/10 outline-none 
                            transition-all duration-300 placeholder:text-white/50 text-white"
                            required
                        />
                    </div>
                    <div className="relative">
                        <textarea
                            placeholder={czech ? "Vaše zpráva" : "Your message"}
                            className="w-full p-4 bg-white/10 border border-white/20 rounded-lg 
                            focus:border-white/40 focus:ring-2 focus:ring-white/10 outline-none 
                            transition-all duration-300 min-h-[150px] placeholder:text-white/50 
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
                        className="p-4 bg-white text-purple-900 rounded-lg font-semibold 
                        disabled:bg-white/20 disabled:text-white/40
                         transform hover:-translate-y-0.5 
                         hover:shadow-white/20
                        transition-all duration-300  
                        disabled:cursor-not-allowed disabled:hover:transform-none"
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
