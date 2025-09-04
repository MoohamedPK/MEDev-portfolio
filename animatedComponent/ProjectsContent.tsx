"use client"; 

import { ProjectsData } from "@/constants";

//GSAP 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Dot, Github } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger)

const ProjectsContent = () => {

    const projectsContainerRef = useRef<HTMLElement>(null)


    return (
        <main ref={projectsContainerRef} className="mt-[20dvh] flex flex-col justify-center items-center">
                {ProjectsData.map((project, i) => (
                <section key={i} className="h-screen w-[90dvw] sticky top-10 flex justify-center items-center rounded-[100px] m-5 text-black bg-white">
                    
                    <div className="contentContainer grid grid-cols-2 items-center">

                        <div className="right size-[25rem] bg-white">
                            <Image src={project.image} alt="project image" className="size-full object-cover" width={400} height={400}/>
                        </div>

                        <div className="content space-y-8">    
                            <div className="contentHead space-y-8">
                                <h1 className="font-nevanta-bold text-[2.5rem]">{project.title}</h1>
                                <p className="w-3/4 font-nevanta-Light">{project.overview}</p>
                            </div>

                            <div className="features font-nevanta-Medium capitalize space-y-3">
                                <p>Features: </p>
                                <ul className="space-y-2">
                                    {project.features.map((feature, i) => (
                                        <div key={i} className="flex items-center space-x-2">
                                            <Dot/> <li className="" >{feature}</li>
                                        </div>
                                    ))}
                                </ul>
                            </div>

                            <div className="buttons flex items-center space-x-6">
                                <Link href={project.link} className="flex items-center bg-black w-fit text-text p-3 btn-hover cursor-pointer">
                                    Live Demo
                                    <ArrowUpRight/>
                                </Link>

                                <Link href={project.link} className="flex items-center bg-black w-fit text-text p-3 btn-hover cursor-pointer space-x-2">
                                    <p>Github Repo</p>
                                    <Github size={20}/>
                                </Link>
                            </div>
                        </div>

                    </div>

                </section>
            ))}
        </main>
    )
}

export default ProjectsContent