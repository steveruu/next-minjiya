"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
    const { email, userFirstName, text } = await req.json();

    const { data, error } = await resend.emails.send({
        from: "minjiya-form <form@minjiya.com>",
        to: ["inquiries@minjiya.com"],
        subject: "Nový přijatý formulář",
        html: `<h1>Přišla vám nová zpráva od ${email}</h1><h3>${userFirstName}</h3><p>${text}</p>`,
    });

    if (error) {
        return Response.json({ error });
    }

    return Response.json({ data });
}
