"use client"

import axios from "axios"
import { ChangeEvent, useState } from "react"

// GSAP
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger);


interface FormProps {
    name: string,
    email: string,
    subject: string,
    message: string
}

const ContactContent = () => {

    // GSAP ANIMATION
    useGSAP(() => {

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "d"
                }
            })
            
            return tl
        })

        return () => {
            ctx.revert();
        }
    }, [])


    //state to handle the form
    const [form, setForm] = useState<FormProps>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    // state to handle the loading
    const [loading, setLoading] = useState<boolean>(false);

    // state to handle the success state
    const [success, setSuccess] = useState<boolean>(false);

    // state to handle errors 
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({...form, [e.target.name]: [e.target.value]});
    }
    
    const handleResend = async () => {

        try {
            
            setLoading(true);
            setError(null);

            const res = await axios.post("/api/resend", form)

            if (res.status === 200) setSuccess(true);

        } catch (error) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (

        <main className="min-h-screen bg-white text-black py-[3rem]">
            <div className="text-center pb-[3rem] text-[2em] overflow-hidden text-black italic font-nevanta-Medium">
                <h1 className="section-title m-0 leading-8">
                    Let&apos;s Get in Touch
                </h1>
            </div>


            <div className="grid grid-cols-2 gap-x-6 ">

                <div className="leftContact space-y-[32px] py-[2rem] px-[3rem]">
                    <h3 className="font-nevanta-Medium text-lg">
                        Contact
                    </h3>

                    <p className="max-w-2/3 font-nevanta-Light">Whether you’d like to collaborate on a project, hire me for freelance work, or just connect and chat, feel free to reach out—I’d love to hear from you.</p>

                    <p className="border border-black rounded-full w-fit px-4 py-2 ">mohamedhassani123456@gmail.com</p>

                    <div className="flex items-center space-x-6">
                        <Link href={''}>
                            <Github/>
                        </Link>

                        <Link href={''}>
                            <Linkedin/>
                        </Link>

                        <Link href={''}>
                            <Twitter/>
                        </Link>
                    </div>
                </div>


                <div className="rightContact">
                    <div className="w-full  p-6 grid grid-cols-2 gap-x-6 font-nevanta-Medium ">

                    <input
                    className="w-full mt-[2rem] p-2 border-b-1 outline-none placeholder-black"
                    type="text"
                    name="name"
                    placeholder="Name*"
                    value={form.name}
                    onChange={handleChange}
                    />

                    <input
                    className="w-full mt-[2rem] p-2 border-b-1 outline-none placeholder-black"
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={form.email}
                    onChange={handleChange}
                    />

                    <input
                    className="w-full mt-[2rem] p-2 border-b-1 col-span-2 outline-none placeholder-black"
                    type="text"
                    name="subject"
                    placeholder="Subject*"
                    value={form.subject}
                    onChange={handleChange}
                    />

                    <textarea
                    className="w-full mt-[2rem] p-2 border-b-1 col-span-2 outline-none placeholder-black"
                    name="message"
                    placeholder="Message*"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    />
                    
                </div>

                    <div className=" flex justify-end mr-[3rem] mt-[2rem]">
                        <div className="group flex justify-center items-center space-x-4 w-fit cursor-pointer">
                            <div className="bg-black size-[3em] flex justify-center items-center rounded-full group-hover:rotate-[45deg] transition-transform duration-300"><ArrowUpRight className="text-white"/></div>
                            <button
                            onClick={handleResend}
                            disabled={loading}
                            className="font-nevanta-Medium text-[2rem] cursor-pointer"
                            >
                            {loading ? "Sending..." : "Send"}
                            </button>
                        </div>
                    </div>

                    {success && <p className="mt-3 text-black font-nevanta-Medium">✅ Message sent successfully!</p>}
                    {error && <p className="mt-3 text-red-400 font-nevanta-Medium">{error}</p>}
                </div>

            </div>

            <div className="text-center mt-32 text-5xl font-nevanta-bold italic text-black">
                &quot;Let&apos;s Build Something Amazing Together&quot;
            </div>
        </main>
    )
}

export default ContactContent