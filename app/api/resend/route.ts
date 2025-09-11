
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {

    const body = await req.json()
    const {data, error} = await resend.emails.send({
        from: "onboarding@resend.dev", // this is the domain 
        to: "mohamedhassani123456@gmail.com", // the receiver
        subject: body.subject, 
        text: body.message,
        replyTo: body.email // the user that we will reply to 
    });

    if (error) return Response.json({ status: 400, message: error.message });

    return Response.json({ status: 200, data });
};
