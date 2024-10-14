"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const isInvalid = (text: FormDataEntryValue, charLimit: number = 100) => {
    return (
        !text ||
        text.toString().trim() == "" ||
        text.toString().length < 4 ||
        text.toString().length > charLimit
    );
};

export async function resend_email_send(formD: {
    email: FormDataEntryValue;
    userFirstName: FormDataEntryValue;
    text: FormDataEntryValue;
}) {
    const { data, error } = await resend.emails.send({
        from: "minjiya-form <form@minjiya.com>",
        to: ["inquiries@minjiya.com"],
        subject: "Nový přijatý formulář",
        html: `<h1>Přišla vám nová zpráva od ${formD.email}</h1><h3>${formD.userFirstName}</h3><p>${formD.text}</p>`,
    });

    if (error) {
        return Response.json({ error });
    }

    return Response.json({ data });
}

let requestCount = 0;
const RATE_LIMIT = 3;
const TIME_WINDOW = 60 * 1000; // 3 za minutu
let firstRequestTime = Date.now();

export async function formHandle(
    prevState: { status: number; message: string },
    formD: FormData
) {
    const currentTime = Date.now();

    if (currentTime - firstRequestTime > TIME_WINDOW) {
        firstRequestTime = currentTime;
        requestCount = 0;
    }

    requestCount++;

    if (requestCount > RATE_LIMIT) {
        return {
            status: 429,
            message: "Too many requests. Please try again later.",
        };
    }

    const data = {
        email: formD.get("email") ?? "",
        userFirstName: formD.get("userFirstName") ?? "",
        text: formD.get("text") ?? "",
        isVerified: formD.get("isVerified") ?? "",
    };

    if (data.isVerified == "false") {
        return { status: 400, message: "Prosím, ověřte, že nejste robot." };
    } else if (
        isInvalid(data.email, 40) ||
        isInvalid(data.userFirstName, 40) ||
        isInvalid(data.text, 1500) ||
        !data.email.toString().includes("@")
    ) {
        return { status: 400, message: "Vyplňte všechna pole správně!" };
    } else {
        await resend_email_send(data);
        console.log(data);
        return { status: 200, message: "Zpráva byla úspěšně odeslána!" };
    }
}
