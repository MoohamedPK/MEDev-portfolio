"use client"

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import SplitHeadlinesAnimation from "@/commonAnimations/SplitHeadlinesAnimation";
import BackBtn from "./BackBtn";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import TextSplitAnimation from "@/commonAnimations/TextSplitAnimation";

gsap.registerPlugin(SplitText);

interface Project {
    title: string;
    slug: string;
    link: string;
    overview: string;
    features: string[];
    github: string;
    image: string;
    color: string;
    techs: string[];
}
const ClientProjectDetails = ({ project }: { project: Project }) => {

    const projectDetailsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({});
        const ctx = gsap.context(() => {
            tl.add(SplitHeadlinesAnimation(".title"))

            tl.fromTo(".link-btn", {
                scale: 0.01,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: "power3.inOut",
            }, "-=0.3")

            tl.fromTo(".card", {
                opacity: 0,
                x: -50,
                skewY: -4
            }, {
                skewY:0,
                opacity: 1,
                x: 0,
                duration: 1,
                ease: "power3.inOut",
                stagger: 0.06
            })

            tl.add(TextSplitAnimation(".overview"), "-=0.4")

            tl.add(TextSplitAnimation(".feature"), "-=0.6")

            tl.add(TextSplitAnimation(".tech"), "-=0.8")

        }, projectDetailsRef)

        return () => {
            ctx.revert();
        }
    })

    return (
        <div ref={projectDetailsRef} className="bg-black min-h-screen md:min-h-[120dvh] py-10 md:py-20 text-white relative overflow-hidden">

    {/* Light effect */}
    <div className="light-effect w-[55rem] h-[10rem] absolute -top-15 left-1/2 -translate-x-1/2 blur-[12rem] bg-white rounded-full"></div>

    {/* Title & Buttons */}
    <header className="font-nevanta-bold uppercase text-center px-6 text-[2.5rem] sm:text-[3rem] md:text-[4rem]">
        <div className="flex flex-col md:flex-row justify-center items-center relative">
            {/* Project Title */}
            <h1 className="title italic">✦ {project.title} ✦</h1>
        </div>
    </header>

    <div className="flex justify-between px-10 pt-25">
        <div className="link-btn ">
            <BackBtn />
        </div>

        <div className="flex space-x-5 md:static md:top-auto md:right-auto">
            <Link target="_blank" href={project.link} aria-label="Open live demo" className="link-btn w-12 h-12 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center btn-hover mix-blend-difference">
                <ArrowUpRight size={24} />
            </Link>
            <Link target="_blank" href={project.github} aria-label="Open GitHub repository" className="link-btn w-12 h-12 md:w-12 md:h-12 rounded-full text-black bg-white flex items-center justify-center btn-hover mix-blend-difference">
                <Github size={24} />
            </Link>
        </div>
    </div>

    {/* Cards */}
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-10 pt-12 font-nevanta-Medium">

        {/* Project Overview */}
        <article className="bg-zinc-300 card rounded-[20px] px-6 sm:px-10 py-6 sm:py-8 text-black">
            <header className="flex pb-4 items-center space-x-4">
                <span className="text-2xl" aria-hidden="true">✺</span>
                <h2 className="text-xl">Project Overview</h2>
            </header>
            <p className="overview">● {project.overview}</p>
        </article>

        {/* Features */}
        <article className="bg-zinc-300 card rounded-[20px] px-6 sm:px-10 py-6 sm:py-8 text-black">
            <header className="flex pb-4 items-center space-x-4">
                <span className="text-2xl" aria-hidden="true">✹</span>
                <h2 className="text-xl">Features</h2>
            </header>
            <ul className="space-y-3">
                {project.features.map((feat) => (
                    <li key={feat} className="feature flex items-center space-x-3">● {feat}</li>
                ))}
            </ul>
        </article>

        {/* Tech Stack */}
        <article className="bg-zinc-300 card rounded-[20px] col-span-1 md:col-span-2 lg:col-span-1 px-6 sm:px-10 py-6 sm:py-8 text-black">
            <header className="flex pb-4 items-center space-x-4">
                <span className="text-[1.5rem]" aria-hidden="true">✶</span>
                <h2 className="text-xl">Tech Stack</h2>
            </header>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-2 gap-x-4">
                {project.techs.map((tech) => (
                    <div key={tech} className="tech flex items-center space-x-2">● {tech}</div>
                ))}
            </div>
        </article>
    </main>
</div>

    )
}

export default ClientProjectDetails