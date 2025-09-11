"use client"

import axios from "axios"
import { ChangeEvent, useRef, useState } from "react"

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { SplitText } from "gsap/all"
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import CopyButton from "@/components/CopyButton"

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);


interface FormProps {
    name: string,
    email: string,
    subject: string,
    message: string
}

const ContactContent = () => {

    // GSAP ANIMATION
    const contactSectionRef = useRef<HTMLElement | null>(null)
    const sectionTitleRef = useRef<HTMLHeadingElement | null>(null)
    const contactHeadRef = useRef<HTMLHeadingElement | null>(null)
    const contactTextRef = useRef<HTMLParagraphElement | null>(null)
    const copyIconRef = useRef<HTMLDivElement | null>(null);
    
    useGSAP(() => {
        
        const inputsRef = gsap.utils.toArray(".input")
        const linksRef = gsap.utils.toArray(".link");   
        const sectionTitleSplit = new SplitText(sectionTitleRef.current, {type: "chars, words"});
        const contactHeadSplit = new SplitText(contactHeadRef.current, {type: "words, chars"});
        const contactTextSplit = new SplitText(contactTextRef.current, {type: "lines"});

        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: contactSectionRef.current,
                    start: "top 80%",
                },
                defaults: {
                    duration: 0.9,
                    ease: "power3.inOut",
                }
            })
            
            tl.fromTo([sectionTitleSplit.words, contactHeadSplit.chars], {
                yPercent: 130,
            }, {
                yPercent: 0,
                stagger: 0.04
            })

            tl.fromTo([contactTextSplit.lines, inputsRef], {
                opacity: 0,
                y: 50,
            }, {
                opacity: 1, 
                y: 0,
                stagger: 0.07
            }, "<0.7")  

            tl.fromTo([".myEmail",".sendBtn"], {
                x: -40,
                opacity: 0
            }, {
                x: 0,
                opacity : 1,
            }, "<0.7")

            tl.fromTo(copyIconRef.current, {
                opacity :0,
                y: 30,
            }, {
                opacity: 1,
                y: 0
            }, "<0.5")

            tl.fromTo(linksRef, {
                opacity: 0,
                y: 20
            }, {
                opacity: 1,
                y:0,
                stagger: 0.07
            }, "<0.7")

            tl.fromTo(".quote", {
                skewX: 20,
                opacity: 0,
                scale: 0.7,
            }, {
                opacity: 1,
                skewX: 0,
                scale: 1,
                duration: 1.5,
            }, "<0.4")

            tl.fromTo(".line", {
                width: 0,
                height: "3px",
                position: "absolute",
                bottom: -5,
                left: 10,
                backgroundColor: "#F00000"
            }, {
                width: "100%",
                height: "3px",
                duration: 1,
            })

        }, contactSectionRef)

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
        setForm({...form, [e.target.name]: e.target.value});
    }
    
    const handleResend = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            
            setLoading(true);
            setError(null);

            const res = await axios.post("/api/resend", form)

            if (res.status === 200) setSuccess(true);

        } catch (error) {
            setError("Something went wrong. Please try again.");
            console.log(error);
        } finally {
            setLoading(false);
            setForm({
                name: "",
                email: "",
                subject: "",
                message: ""
            })
        }
    }

    return (

            <main ref={contactSectionRef} className="min-h-screen bg-white text-black py-[3rem]">

                <div className="text-center text-[2em] overflow-hidden text-black italic font-nevanta-Medium">
                    <h1 ref={sectionTitleRef} className="section-title m-0 leading-8">
                        Let&apos;s Get in Touch
                    </h1>
                </div>

                <div className="grid grid-cols-2 gap-x-6 ">

                    <div className="leftContact space-y-[32px] py-[2rem] px-[3rem]">
                        <div className=" overflow-hidden">
                            <h3 ref={contactHeadRef} className="font-nevanta-Medium text-lg leading-5 ">
                                Contact
                            </h3>
                        </div>

                        <p ref={contactTextRef} className="max-w-2/3 font-nevanta-Light">Whether you’d like to collaborate on a project, hire me for freelance work, or just connect and chat, feel free to reach out—I’d love to hear from you.</p>

                        <div className="flex items-center space-x-5">
                            <p  className="myEmail border border-black rounded-full w-fit px-4 py-2 ">mohamedhassani123456@gmail.com</p>
                            <div ref={copyIconRef}>
                                <CopyButton />
                            </div>
                        </div>

                        <div className="flex items-center space-x-6">
                            <Link className="link" target="_blank" href={'https://github.com/MoohamedPK'}>
                                <Github/>
                            </Link>

                            <Link className="link" target="_blank" href={'https://www.linkedin.com/in/mohamed-hs/'}>
                                <Linkedin/>
                            </Link>

                            <Link className="link" target="_blank" href={'https://x.com/MohamedHS45'}>
                                <Twitter/>
                            </Link>
                        </div>
                    </div>


                    <form className="rightContact" onSubmit={handleResend}>
                        <div className="w-full  p-6 grid grid-cols-2 gap-x-6 font-nevanta-Medium ">

                        <input
                        className="input w-full mt-[2rem] p-2 border-b-1 outline-none placeholder-black"
                        type="text"
                        name="name"
                        placeholder="Name*"
                        required
                        value={form.name}
                        onChange={handleChange}
                        />

                        <input
                        className="input w-full mt-[2rem] p-2 border-b-1 outline-none placeholder-black"
                        type="email"
                        required
                        name="email"
                        placeholder="Email*"
                        value={form.email}
                        onChange={handleChange}
                        />

                        <input
                        className="input w-full mt-[2rem] p-2 border-b-1 col-span-2 outline-none placeholder-black"
                        type="text"
                        name="subject"
                        required
                        placeholder="Subject*"
                        value={form.subject}
                        onChange={handleChange}
                        />

                        <textarea
                        className="input w-full mt-[2rem] p-2 border-b-1 col-span-2 outline-none placeholder-black"
                        name="message"
                        placeholder="Message* (optional)"
                        rows={4}
                        
                        value={form.message}
                        onChange={handleChange}
                        />
                        
                    </div>

                        <div className=" flex justify-end mr-[3rem] mt-[2rem]">
                            <div className="sendBtn group flex justify-center items-center space-x-4 w-fit cursor-pointer">
                                <div className="bg-black size-[3em] flex justify-center items-center rounded-full group-hover:rotate-[45deg] transition-transform duration-300"><ArrowUpRight className="text-white"/></div>
                                <button
                                type="submit"
                                disabled={loading}
                                className="font-nevanta-Medium text-[2rem] cursor-pointer"
                                >
                                {loading ? "Sending..." : "Send"}
                                </button>
                            </div>
                        </div>

                        {success && <p className="mt-3 text-black font-nevanta-Medium">✅ Message sent successfully!</p>}
                        {error && <p className="mt-3 text-red-400 font-nevanta-Medium">{error}</p>}
                    </form>

                </div>

                <div className="text-left w-fit pl-[2rem]  mt-12 text-5xl font-nevanta-bold italic text-black relative">
                    <p className="quote">
                        Let&apos;s Build Something Amazing Together :)
                    </p> 

                    <span className="line "></span>
                </div>
            </main>
    )
}

export default ContactContent