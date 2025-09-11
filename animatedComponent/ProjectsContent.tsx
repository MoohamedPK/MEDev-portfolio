"use client"; 

import { ProjectsData } from "@/constants";

//GSAP 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, SplitText)

const ProjectsContent = () => {

    const projectsContainerRef = useRef<HTMLElement>(null)
    
    useGSAP(() => {

        const ctx = gsap.context(() => {
            
            
            gsap.utils.toArray<HTMLElement>("section").forEach((section) => {

                const title = section.querySelector(".project-title")
                const splitTitle = new SplitText(title, {type: "words, chars"})

                const overview = section.querySelector(".overview");
                const overviewSplit = new SplitText(overview, {type: "lines, words"})

                const featureList = section.querySelectorAll(".feature-list");
                

                const sectionTitleSplit = new SplitText(".section-title", {type: "words, chars"});

                const projectImg = section.querySelector(".project-image");

                gsap.fromTo(sectionTitleSplit.chars, {
                    yPercent: 130,
                }, {
                    yPercent: 0,
                    duration: 0.9,
                    ease:"power3.inOut",
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: projectsContainerRef.current,
                        start:"top 80%",
                    }
                })

                // section scale animation 
                 gsap.set(projectsContainerRef.current, { perspective: 1000 }); // set perspective on parent

                gsap.to(section, {
                    z: -200,              // push backward in 3D space
                    scale: 0.6,
                    transformOrigin: "center top",
                    scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    }
                })

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                    }
                }); 

                tl.fromTo(projectImg, {
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
                }, {
                    clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
                    duration: 0.9,
                    ease: "power3.inOut",
                    
                })

                tl.fromTo([splitTitle.words, overviewSplit.lines, featureList], {
                    yPercent: 130,
                    opacity: 0,
                }, {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease:"power3.inOut",
                    stagger: 0.06,
                }, "<=0.3")

                
            })
            
        }, projectsContainerRef)

        return () => {
            ctx.revert();
        }
    }, [])

    return (
        <main ref={projectsContainerRef} className="grid justify-center items-center" style={{ height: `${ProjectsData.length * 110}vh` }}>

            <div className="text-center text-[2em] overflow-hidden text-black italic font-nevanta-Medium">
                <h1 className="section-title m-0 leading-8">
                    Work Showcase
                </h1>
            </div>

                {ProjectsData.map((project, i) => (
                <section key={i} style={{ top: `calc(10% + ${i * 60}px)`, backgroundColor: project.color }} className="min-h-[100dvh] w-[90dvw] sticky flex justify-center items-center rounded-[100px] text-black bg-white inset-shadow-sm inset-shadow-gray-400/60">
                    
                    <div className="contentContainer size-full flex justify-between items-center px-5">

                        <div className="right size-[25rem] overflow-hidden">
                            <Image src={project.image} alt="project image" className="project-image size-full object-cover" width={300} height={300}/>
                        </div>

                        <div className="content w-1/2 space-y-5">    
                            <div className="contentHead space-y-8">
                                <div className="leading-10 overflow-hidden">
                                    <h1 className="project-title font-nevanta-bold text-[2.5rem]">{project.title}</h1>
                                </div>
                                <div className="">
                                    <p className="overview w-3/4 font-nevanta-Light ">{project.overview}</p>
                                </div>
                            </div>

                            <div className="features font-nevanta-Medium capitalize space-y-3">
                                <p>Features: </p>
                                <ul className="space-y-2">
                                    {project.features.map((feature, i) => (
                                        <div key={i} className=" flex items-center space-x-2 pl-5 leading-5 pt-1 overflow-hidden">
                                            <li className="feature-list" >{feature}</li>
                                        </div>
                                    ))}
                                </ul>
                            </div>

                            <div className="buttons flex items-center space-x-6">
                                <Link href={project.link} className="flex items-center bg-sand border border-black w-fit text-black p-3 btn-hover cursor-pointer">
                                    Live Demo
                                    <ArrowUpRight/>
                                </Link>

                                <Link href={project.github} className="flex items-center bg-sand border border-black w-fit text-black p-3 btn-hover cursor-pointer space-x-2">
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